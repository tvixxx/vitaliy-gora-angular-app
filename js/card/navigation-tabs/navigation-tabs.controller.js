(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('NavigationTabsController', NavigationTabsController);

    function NavigationTabsController(userNavigationTabsService) {
        var vm = this;

        vm.tab = 'profile';

        vm.tabs = userNavigationTabsService.getNavigationTabs();
        vm.setTab = setTab;
        vm.isTabSet = isTabSet;

        function setTab(newTab) {
            vm.tab = newTab;
        }

        function isTabSet(tabName) {
            return vm.tab === tabName;
        }

        NavigationTabsController.$inject = ['userNavigationTabsService'];
    }
})();