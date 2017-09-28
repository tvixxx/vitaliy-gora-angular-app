(function () {
    angular
        .module('mainApp')
        .controller('CardController', CardController);

    function CardController(userProfileService, userFriendsService, $q, constants) {
        var vm = this;

        vm.page = {};
        vm.page.title = constants.mainPageTitle;
        vm.lettersPattern = constants.lettersPattern;
        vm.isInterestModuleOpen = false;
        vm.localStorageData = {};
        vm.buttonTitle = constants.buttonTitle;
        vm.userProfileKey = 'userProfile';
        vm.cacheUserInfo = null;

        vm.isRequestSend = isExistInLocalStorage('requestToFriend');

        function isExistInLocalStorage(item) {
            var data = JSON.parse(localStorage.getItem(item));
            return data ? true : false;
        }

         userProfileService.getUserData()
             .then(getUserDataSuccess)
             .catch(getUserDataError);

         function getUserDataSuccess(userProfile) {
             vm.cacheUserInfo = userProfile;

             if (isExistInLocalStorage(vm.userProfileKey)) {
                 var userProfileObj = JSON.parse(localStorage.getItem(vm.userProfileKey));

                 vm.userProfile = userProfileObj;
                 return;
             }

             vm.userProfile = userProfile;
         }

         function getUserDataError(errorReason) {
             console.error(errorReason);
         }

         userFriendsService.getAllFriends()
             .then(getAllFriendsSuccess)
             .catch(getAllFriendsError);

        function getAllFriendsSuccess(response) {
            vm.userFriends = response.friends;
        }

        function getAllFriendsError(errorReason) {
            console.error(errorReason);
        }

        vm.addToFriend = addToFriend;
        vm.dismissRequest = dismissRequest;
        vm.removeInterest = removeInterest;
        vm.addInterest = addInterest;
        vm.toggleInterestAddModule = toggleInterestAddModule;
        vm.saveChanges = saveChanges;

        function addToFriend() {
            vm.isRequestSend = true;
            localStorage.setItem(vm.localStorageData.requestToFriend, true);
        }

        function dismissRequest() {
            vm.isRequestSend = false;
            localStorage.setItem(vm.localStorageData.requestToFriend, false);
        }

        function addInterest() {

            if (!vm.formInterest.$invalid) {
                vm.userProfile.interests.push(vm.newInterest);
                vm.newInterest = null;
            }

            return false;
        }

        function removeInterest($index) {
            vm.userProfile.interests.splice($index, 1);
        }

        function toggleInterestAddModule() {
            vm.isInterestModuleOpen = !vm.isInterestModuleOpen;
        }

        function saveChanges($event) {
            var target = $event.currentTarget;
            var dataAttr = target.getAttribute('data-title');
            var targetText = target.textContent;

            if (vm.cacheUserInfo) {
                for (var key in vm.cacheUserInfo) {
                    if (vm.cacheUserInfo[key] !== undefined) {
                        vm.localStorageData[key] = vm.cacheUserInfo[key];
                    }
                }
            }

            vm.localStorageData[dataAttr] = targetText.trim();

            var stringifyLocalStorage = JSON.stringify(vm.localStorageData);

            setInStorage(vm.userProfileKey, stringifyLocalStorage);
        }

        function setInStorage(name, obj) {
            localStorage.setItem(name, obj);
        }

        CardController.$inject = ['userProfileService', 'userFriendsService', '$q', 'constants'];
    }
})();
