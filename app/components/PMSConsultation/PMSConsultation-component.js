(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .component('pmsConsultation', pmsConsultation());

    function pmsConsultation() {
        var component = {
            templateUrl: 'components/PMSConsultation/PMSConsultation.html',
            controller: 'pmsConsultationCtrl',
            controllerAs: 'pmsConsultationVm'
        };

        return component;
    }
})();
