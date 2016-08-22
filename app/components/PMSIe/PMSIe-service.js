/**
 * Created by seancai on 8/21/16.
 */
(function () {
    'use strict';

    angular.module('PMSWidget')
        .factory('PMSIeService',['$http',PMSIeService]);
    
    function PMSIeService($http) {
        function getIePromise() {
            return $http({
                method:'GET',
                url:' https://demo0434460.mockable.io/ie.json'
            });
        }

        return {
            getIePromise:getIePromise
        }
    }
})();