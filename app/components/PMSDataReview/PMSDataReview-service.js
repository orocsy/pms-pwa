/**
 * Created by seancai on 8/22/16.
 */
(function () {
    'use strict';

    angular.module('PMSWidget')
        .factory('PMSDrService',['$http','$resource',PMSDrService]);
    
    function PMSClkService($http,$resource) {
        function getDrPromise() {
            
            return $http.jsonp('http://www.highcharts.com/samples/data/from-sql.php?callback=JSON_CALLBACK');
            // var url = 'http://www.highcharts.com/samples/data/from-sql.php?callback=JSON_CALLBACK';
            //  return $resource(url,{callback:"JSON_CALLBACK"},{getClkData:{method:'JSONP'}});
            
        }
        function getAfterExtreme(e) {

            return $http.jsonp('http://www.highcharts.com/samples/data/from-sql.php?start='+ Math.round(e.min) +
                '&end='+ Math.round(e.max) +'&callback=JSON_CALLBACK');
        }
        
        return {
            getDrPromise:getDrPromise,
            getAfterExtreme:getAfterExtreme
        }
    }
})()