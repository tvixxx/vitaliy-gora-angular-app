(function () {
    'use strict';

    angular.module('mainApp')
        .factory('userFriendsService', ['$q', '$http', userFriendsService]);

    function userFriendsService($q, $http) {
        return {
            getAllFriends: getAllFriends
        };

        function getAllFriends() {
            var friendsPath = './model/friends.json';

            return $http.get(friendsPath)
                .then(getAllFriendsSuccess)
                .catch(getAllFriendsError);
        }

        function getAllFriendsSuccess(response) {
            return response.data;
        }

        function getAllFriendsError(response) {
            return $q.reject('Ошибка. Не удалось получить друзей пользователя. HTTP status: ' + response.status + ')');
        }
    }
})();