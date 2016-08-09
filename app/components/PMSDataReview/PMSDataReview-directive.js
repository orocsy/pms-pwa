(function() {
    'use strict';
    angular
    .module('PMSWidget')
    .directive('pmsDataReview', pmsDataReview);

    function pmsDataReview() {
        var directive = {
            templateUrl: 'components/PMSDataReview/PMSDataReview.html?6789',
            controller: 'pmsDataReviewCtrl',
            controllerAs: 'pmsDataReviewVm',
            restrict: 'E',
            link : linkFunc
        };

        return directive;

        function linkFunc(scope, elem, attrs) {

        }
    }
})();
