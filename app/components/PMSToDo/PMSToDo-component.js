(function() {
    'use strict';
    angular
    .module('PMSToDo')
    .component('pmsToDo', pmsToDo());

    function pmsToDo() {
        var component = {
            templateUrl: 'components/PMSToDo/PMSToDo.html',
            controller: 'pmsToDoCtrl',
            controllerAs: 'toDoVm'
        };

        return component;
    }
})();
