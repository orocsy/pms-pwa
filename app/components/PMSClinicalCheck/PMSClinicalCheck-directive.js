(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .directive('pmsClinicalCheck', pmsClinicalCheck);

    function pmsClinicalCheck() {
        var directive = {
            templateUrl: 'components/PMSClinicalCheck/PMSClinicalCheck.html',
            controller: 'pmsClinicalCheckCtrl',
            controllerAs: 'pmsClinicalCheckVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
