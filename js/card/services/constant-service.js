(function(){

    angular.module('mainApp')
        .constant('constants', {
            defaultNavigationTab: 'profile',
            mainPageTitle: 'Main Card User',
            buttonTitle: {
                nonClicked: 'Добавить в друзья',
                disabledName: 'Заявка отправлена!'
            },
            lettersPattern: /[a-zA-Z]/
        });
})();