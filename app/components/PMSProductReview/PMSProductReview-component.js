(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .component('pmsProductReview', pmsProductReview());

    function pmsProductReview() {
        var component = {
            templateUrl: 'components/PMSProductReview/PMSProductReview.html',
            controller: 'pmsProductReviewCtrl',
            controllerAs: 'pmsProductReviewVm'
        };

        return component;
    }
})();
