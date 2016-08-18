(function() {
    'use strict';
    angular
    .module('PMSHeader')
    .component('pmsHeader', pmsHeader());

    function pmsHeader() {
        var component = {
            templateUrl: 'components/PMSHeader/PMSHeader.html',
            controller: 'pmsHeaderCtrl',
            controllerAs: 'headerVm'
        };

        return component;
    }
})();
