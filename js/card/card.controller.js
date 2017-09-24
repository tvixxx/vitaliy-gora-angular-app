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
        vm.localStorageData = {
            requestToFriend: 'requestToFriend',
            userProfile: 'userProfile',
            userName: '',
            userCity: '',
            userMaritalStatus: '',
            userPhone: '',
            userEmail: '',
            userInterests: [
                'музыка',
                'компьютеры',
                'радио'
            ]
        };
        vm.buttonTitle = constants.buttonTitle;

        vm.isRequestSend = isExistInLocalStorage(vm.localStorageData.requestToFriend);

        function isExistInLocalStorage(item) {
            var data = JSON.parse(localStorage.getItem(item));
            return data ? true : false;
        }

         userProfileService.getUserData()
             .then(getUserDataSuccess)
             .catch(getUserDataError);

         function getUserDataSuccess(userProfile) {
             debugger;
             if (isExistInLocalStorage(vm.localStorageData.userProfile)) {
                 var userProfileObj = JSON.parse(localStorage.getItem(vm.localStorageData.userProfile));

                 for (var key in userProfileObj) {
                     if (userProfileObj[key] === undefined ) {
                         vm.userProfile[key] = userProfile[key];
                     }

                     vm.userProfile[key] = userProfileObj[key];
                 }
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

            if (targetText && targetText.length > 0) {
                setInStorage(dataAttr, targetText);
            }
            console.log(dataAttr);
        }

        function saveTitle() {

        }

        function setInStorage(name, obj) {
            localStorage.setItem(name, obj);
        }

        CardController.$inject = ['userProfileService', 'userFriendsService', '$q', 'constants'];
    }
})();
