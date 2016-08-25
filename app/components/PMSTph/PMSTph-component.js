(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .component('pmsTph', pmsTph());

    function pmsTph() {
        var component = {
            templateUrl: 'components/PMSTph/PMSTph.html',
            controller: 'pmsTphCtrl',
            controllerAs: 'pmsTphVm',
        };

        return component;
    }
})();
