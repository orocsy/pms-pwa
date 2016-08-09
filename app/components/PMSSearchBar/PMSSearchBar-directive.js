(function() {
    'use strict';
    angular
    .module('PMSSearchBar')
    .directive('pmsSearchBar', pmsSearchBar);

    function pmsSearchBar() {
        var directive = {
            templateUrl: 'components/PMSSearchBar/PMSSearchBar.html',
            controller: 'pmsSearchBarCtrl',
            controllerAs: 'searchBarVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
