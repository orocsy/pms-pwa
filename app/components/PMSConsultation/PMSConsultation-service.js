/**
 * Created by seancai on 8/21/16.
 */
(function () {
    'use strict';

    angular.module('PMSWidget')
        .factory('pmsConsultationService',['$http',pmsConsultationService]);

    function pmsConsultationService($http) {

        function getCstPromise() {
            return $http({
                method:'GET',
                url:'https://demo0434460.mockable.io/cst.json'
            });

        }
        return {
            getCstPromise:getCstPromise
        }
    }
})()

