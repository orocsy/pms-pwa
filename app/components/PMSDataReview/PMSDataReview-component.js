(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .component('pmsDataReview', {
        templateUrl: 'components/PMSDataReview/PMSDataReview.html',
        controller: 'pmsDataReviewCtrl',
        controllerAs: 'pmsDataReviewVm'

    });

    // function pmsDataReview() {
    //     var component = {
    //         templateUrl: 'components/PMSDataReview/PMSDataReview.html',
    //         controller: 'pmsDataReviewCtrl',
    //         controllerAs: 'pmsDataReviewVm'
    //
    //     };
    //
    //     return component;
    //
    //     function linkFunc(scope, elem, attrs) {
    //
    //     }
    // }
})();
