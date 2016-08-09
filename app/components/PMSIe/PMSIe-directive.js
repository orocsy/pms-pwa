(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .directive('pmsIe', pmsIe);

    function pmsIe() {
        var directive = {
            templateUrl: 'components/PMSIe/PMSIe.html?6789',
            controller: 'pmsIeCtrl',
            controllerAs: 'pmsIeVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
