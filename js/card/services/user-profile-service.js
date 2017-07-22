(function () {
    'use strict';

    angular
        .module('mainApp')
        .factory('userProfileService', userProfileService);

    function userProfileService() {
        return {
            getUserData: getUserData
        };

        function getUserData() {
            return {
                userName: 'Виталя Гора',
                city: 'г. Нижние Шахты',
                maritalStatus: 'Холост',
                mobilePhone: '+7 (440) 554-32-12',
                email: 'vitalya@gora.ru',
                interests: [
                    {
                        title: 'музыка'
                    },
                    {
                        title: 'компьютеры'
                    },
                    {
                        title: 'радио'
                    }
                ]
            }
        }
    }
})();