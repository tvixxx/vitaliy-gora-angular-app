angular
    .module('mainApp')
    .controller('CardController', CardController);

function CardController() {
    var vm = this;

    vm.page = {};
    vm.page.title = 'Main Card User';
}