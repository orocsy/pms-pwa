(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .directive('pmsTph', pmsTph);

    function pmsTph() {
        var directive = {
            templateUrl: 'components/PMSTph/PMSTph.html',
            controller: 'pmsTphCtrl',
            controllerAs: 'pmsTphVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
