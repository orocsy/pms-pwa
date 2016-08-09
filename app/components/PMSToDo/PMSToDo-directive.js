(function() {
    'use strict';
    angular
    .module('PMSToDo')
    .directive('pmsToDo', pmsToDo);

    function pmsToDo() {
        var directive = {
            templateUrl: 'components/PMSToDo/PMSToDo.html?67896',
            controller: 'pmsToDoCtrl',
            controllerAs: 'toDoVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
