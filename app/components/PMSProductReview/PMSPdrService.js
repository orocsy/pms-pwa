/**
 * Created by seancai on 8/22/16.
 */
(function () {
   'use strict';

    angular.module('PMSWidget')
        .factory('PMSPdrService',['$http',PMSPdrService]);

    function PMSPdrService($http) {
        function getPdrPromise() {
            // return $http({
            //     method:'GET',
            //     url:'/'
            // });

        }

        return {
            getPdrPromise:getPdrPromise
        }
    }
})()