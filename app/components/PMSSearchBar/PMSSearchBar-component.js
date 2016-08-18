(function() {
    'use strict';
    angular
    .module('PMSSearchBar')
    .component('pmsSearchBar', pmsSearchBar());

    function pmsSearchBar() {
        var component = {
            templateUrl: 'components/PMSSearchBar/PMSSearchBar.html',
            controller: 'pmsSearchBarCtrl',
            controllerAs: 'searchBarVm'
        };

        return component;
    }
})();
