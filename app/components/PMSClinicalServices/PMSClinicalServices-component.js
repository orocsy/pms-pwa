(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .component('pmsClinicalServices', pmsClinicalServices());

    function pmsClinicalServices() {
        var component = {
            templateUrl: 'components/PMSClinicalServices/PMSClinicalServices.html',
            controller: 'pmsClinicalServicesCtrl',
            controllerAs: 'pmsClinicalServicesVm'
        };

        return component;
    }
})();

