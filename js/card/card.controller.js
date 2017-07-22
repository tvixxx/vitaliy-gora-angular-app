(function () {
    angular
        .module('mainApp')
        .controller('CardController', CardController);

    function CardController(userProfileService, userFriendsService) {
        var vm = this;

        vm.page = {};
        vm.page.title = 'Main Card User';
        vm.isRequestSend = false;
        vm.isInterestModuleOpen = false;
        vm.buttonTitle = {
            nonClicked: 'Добавить в друзья',
            disabledName: 'Заявка отправлена!'
        };

        vm.lettersPattern = /[a-zA-Z]/;

        vm.userProfile = userProfileService.getUserData();
        vm.userFriends = userFriendsService.getAllFriends();
        vm.addToFriend = addToFriend;
        vm.dismissRequest = dismissRequest;
        vm.removeInterest = removeInterest;
        vm.addInterest = addInterest;
        vm.toggleInterestAddModule = toggleInterestAddModule;

        function addToFriend() {
            vm.isRequestSend = true;
        }

        function dismissRequest() {
            vm.isRequestSend = false;
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

        CardController.$inject = ['userProfileService', 'userFriendsService'];
    }
})();
