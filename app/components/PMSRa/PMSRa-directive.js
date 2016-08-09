(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .directive('pmsRa', pmsRa);

    function pmsRa() {
        var directive = {
            templateUrl: 'components/PMSRa/PMSRa.html?6789',
            controller: 'pmsRaCtrl',
            controllerAs: 'pmsRaVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
