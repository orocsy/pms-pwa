(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .directive('pmsConsultation', pmsConsultation);

    function pmsConsultation() {
        var directive = {
            templateUrl: 'components/PMSConsultation/PMSConsultation.html?6789',
            controller: 'pmsConsultationCtrl',
            controllerAs: 'pmsConsultationVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
