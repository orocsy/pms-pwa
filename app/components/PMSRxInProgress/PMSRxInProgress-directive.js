(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .directive('pmsRxInProgress', pmsRxInProgress);

    function pmsRxInProgress() {
        var directive = {
            templateUrl: 'components/PMSRxInProgress/PMSRxInProgress.html',
            controller: 'pmsRxInProgressCtrl',
            controllerAs: 'pmsRxInProgressVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
