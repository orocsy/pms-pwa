(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .component('pmsAssembled', pmsAssembled());

    function pmsAssembled() {
        var component = {
            templateUrl: 'components/PMSAssembled/PMSAssembled.html',
            controller: 'pmsAssembledCtrl',
            controllerAs: 'pmsAssembledVm'
        };

        return component;
    }
})();
