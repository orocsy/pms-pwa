(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .directive('pmsAssembled', pmsAssembled);

    function pmsAssembled() {
        var directive = {
            templateUrl: 'components/PMSAssembled/PMSAssembled.html',
            controller: 'pmsAssembledCtrl',
            controllerAs: 'pmsAssembledVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
