(function() {
    'use strict';
    angular
    .module('PMSHeader')
    .directive('pmsHeader', pmsHeader);

    function pmsHeader() {
        var directive = {
            templateUrl: 'components/PMSHeader/PMSHeader.html',
            controller: 'pmsHeaderCtrl',
            controllerAs: 'headerVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
