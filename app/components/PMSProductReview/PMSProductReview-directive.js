(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .directive('pmsProductReview', pmsProductReview);

    function pmsProductReview() {
        var directive = {
            templateUrl: 'components/PMSProductReview/PMSProductReview.html?6789',
            controller: 'pmsProductReviewCtrl',
            controllerAs: 'pmsProductReviewVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
