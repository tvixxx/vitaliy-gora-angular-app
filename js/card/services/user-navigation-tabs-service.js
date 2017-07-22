(function () {
    'use strict';

    angular
        .module('mainApp')
        .factory('userNavigationTabsService', userNavigationTabsService);

    function userNavigationTabsService() {
        return {
          getNavigationTabs: getNavigationTabs
        };

        function getNavigationTabs() {
            return [
                { tabName: 'Профиль', tabId: 'profile' },
                { tabName: 'Друзья пользователя', tabId: 'userFriends' }
            ]
        }
    }
})();