(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .component('pmsDataEntry', pmsDataEntry());

    function pmsDataEntry() {
        var component = {
            templateUrl: 'components/PMSDataEntry/PMSDataEntry.html',
            controller: 'pmsDataEntryCtrl',
            controllerAs: 'pmsDataEntryVm'
        };

        return component;

    }
})();
