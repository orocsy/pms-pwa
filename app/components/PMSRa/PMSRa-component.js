(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .component('pmsRa', pmsRa());

    function pmsRa() {
        var component = {
            templateUrl: 'components/PMSRa/PMSRa.html',
            controller: 'pmsRaCtrl',
            controllerAs: 'pmsRaVm'
        };

        return component;
    }
})();
