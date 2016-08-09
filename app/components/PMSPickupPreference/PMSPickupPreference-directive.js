(function() {
    'use strict';
    angular
    .module('PMSPickupPreference')
    .directive('pmsPickupPreference', pmsPickupPreference);

    function pmsPickupPreference() {
        var directive = {
            templateUrl: 'components/PMSPickupPreference/PMSPickupPreference.html?b',
            controller: 'pmsPickupPreferenceCtrl',
            controllerAs: 'preferenceVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
