(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .component('pmsClinicalCheck', pmsClinicalCheck());

    function pmsClinicalCheck() {
        var component = {
            templateUrl: 'components/PMSClinicalCheck/PMSClinicalCheck.html',
            controller: 'pmsClinicalCheckCtrl',
        };

        return component;
    }
})();
