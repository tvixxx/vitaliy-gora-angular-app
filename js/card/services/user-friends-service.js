(function () {
    'use strict';

    angular.module('mainApp')
        .factory('userFriendsService', userFriendsService);

    function userFriendsService() {
        return {
            getAllFriends: getAllFriends
        };


        function getAllFriends() {
            return [
                {friendName: 'Лев Бронштейн', friendCity: 'г. Ханты-Мансийск', isOnline: true, source: 'assets/img/pic1.png'},
                {friendName: 'Находка Капитал', friendCity: 'г. Усть-Бельск', isOnline: false, source: 'assets/img/pic2.png'},
                {friendName: 'Яндекс Петренко', friendCity: 'г. Пермь', isOnline: false, source: 'assets/img/pic3.png'},
                {friendName: 'Успех Возможностей', friendCity: 'г. Радонеж', isOnline: true, source: 'assets/img/pic4.png'},
                {friendName: 'Инна Нашлась ', friendCity: 'г. Омск', isOnline: true, source: 'assets/img/pic5.png'},
                {friendName: 'Алла Подольская ', friendCity: 'г. Петропавловск-Камчатский', isOnline: true, source: 'assets/img/pic6.png'},
                {friendName: 'Тихоня Тихонский ', friendCity: 'г. Самара', isOnline: true, source: 'assets/img/pic1.png'},
                {friendName: 'Петр Исполинский ', friendCity: 'г. Волгоград', isOnline: true, source: 'assets/img/pic2.png'},
                {friendName: 'Король Королевич ', friendCity: 'г. Уфа', isOnline: false, source: 'assets/img/pic3.png'},
                {friendName: 'Министр Самообразования ', friendCity: 'г. Уфа', isOnline: true, source: 'assets/img/pic4.png'},
                {friendName: 'Владимир Владимирович', friendCity: 'г. Москва', isOnline: false, source: 'assets/img/pic6.png'}
            ]
        }
    }
})();