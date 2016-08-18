(function() {
    'use strict';
    angular
    .module('PMSPickupPreference')
    .component('pmsPickupPreference', pmsPickupPreference());

    function pmsPickupPreference() {
        var component = {
            templateUrl: 'components/PMSPickupPreference/PMSPickupPreference.html',
            controller: 'pmsPickupPreferenceCtrl',
            controllerAs: 'preferenceVm'
        };
        return component;
    }
})();
