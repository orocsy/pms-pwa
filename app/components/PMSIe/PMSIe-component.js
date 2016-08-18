(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .component('pmsIe', pmsIe());

    function pmsIe() {
        var component = {
            templateUrl: 'components/PMSIe/PMSIe.html',
            controller: 'pmsIeCtrl',
            controllerAs: 'pmsIeVm'
        };

        return component;
    }
})();
