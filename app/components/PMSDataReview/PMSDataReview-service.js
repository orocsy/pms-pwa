/**
 * Created by seancai on 8/22/16.
 */
(function () {
    'use strict';

    angular.module('PMSWidget')
        .factory('PMSDrService',['$http',PMSDrService]);
    
    function PMSDrService($http) {
        function getDrPromise() {
            return $http.get('https://demo0434460.mockable.io/dr.json');
        }

        return {
            getDrPromise:getDrPromise
        }
    }
})()