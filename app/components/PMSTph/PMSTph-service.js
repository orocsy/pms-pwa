/**
 * Created by seancai on 8/19/16.
 */
(function () {
    'use strict';
    angular.module('PMSWidget')
        .factory('PMSTphService',['$http',PMSTphService]);
    
    
    function PMSTphService($http) {
        
        function getPMSTphPromise() {
            return $http({
                method:'GET',
                url:'https://demo0434460.mockable.io/thp.json'
            });
        }
        
        
        
        return{
            getPMSTphPromise:getPMSTphPromise
        }
    }
    
})()