(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .directive('pmsClinicalServices', pmsClinicalServices);

    function pmsClinicalServices() {
        var directive = {
            templateUrl: 'components/PMSClinicalServices/PMSClinicalServices.html?6789',
            controller: 'pmsClinicalServicesCtrl',
            controllerAs: 'pmsClinicalServicesVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
