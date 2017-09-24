(function () {
    'use strict';

    angular
        .module('mainApp')
        .factory('userNavigationTabsService', ['$q', '$http', userNavigationTabsService]);

    function userNavigationTabsService($q, $http) {
        return {
          getNavigationTabs: getNavigationTabs
        };

        function getNavigationTabs() {
            var tabsPath = './model/tabs.json';

            return $http.get(tabsPath)
                .then(getNavigationTabsSuccess)
                .catch(getNavigationTabsError);
        }

        function getNavigationTabsSuccess(response) {
            return response.data;
        }

        function getNavigationTabsError(response) {
            return $q.reject('Ошибка. Не удалось получить данные табов. (HTTP status: ' + response.status + ')');
        }
    }
})();