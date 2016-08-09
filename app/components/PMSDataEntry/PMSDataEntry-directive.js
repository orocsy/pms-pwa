(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .directive('pmsDataEntry', pmsDataEntry);

    function pmsDataEntry() {
        var directive = {
            templateUrl: 'components/PMSDataEntry/PMSDataEntry.html',
            controller: 'pmsDataEntryCtrl',
            controllerAs: 'pmsDataEntryVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
