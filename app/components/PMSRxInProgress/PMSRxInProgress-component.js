(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .component('pmsRxInProgress', pmsRxInProgress());

    function pmsRxInProgress() {
        var component = {
            templateUrl: 'components/PMSRxInProgress/PMSRxInProgress.html',
            controller: 'pmsRxInProgressCtrl',
            controllerAs: 'pmsRxInProgressVm'
        };

        return component;
    }
})();
