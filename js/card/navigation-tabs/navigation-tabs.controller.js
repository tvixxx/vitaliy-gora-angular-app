(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('NavigationTabsController',['constants', 'userNavigationTabsService', NavigationTabsController]);

    function NavigationTabsController(constants, userNavigationTabsService) {
        var vm = this;

        vm.tab = constants.defaultNavigationTab;
        vm.setTab = setTab;
        vm.isTabSet = isTabSet;

        userNavigationTabsService.getNavigationTabs()
            .then(getNavigationTabsSuccess)
            .catch(getNavigationTabsError);

        function getNavigationTabsSuccess(response) {
            vm.tabs = response.tabs;
        }

        function getNavigationTabsError(errorReason) {
            console.error(errorReason);
        }

        function setTab(newTab) {
            vm.tab = newTab;
        }

        function isTabSet(tabName) {
            return vm.tab === tabName;
        }
    }
})();