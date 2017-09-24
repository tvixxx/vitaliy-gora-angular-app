(function () {
    'use strict';

    angular
        .module('mainApp')
        .factory('userProfileService', ['$q', '$http', userProfileService]);

    function userProfileService($q, $http) {

        return {
            getUserData: getUserData
        };

        function getUserData() {
            var userProfilePath = './model/user-profile.json';

            return $http.get(userProfilePath)
                .then(getUserDataSuccess)
                .catch(getUserDataError);
        }

        function getUserDataSuccess(response) {
            return response.data;
        }

        function getUserDataError(response) {
            return $q.reject('Ошибка. Не удалось получить данные пользователя. (HTTP status: ' + response.status + ')');
        }
    }
})();