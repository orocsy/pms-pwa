/**
 * Created by seancai on 8/22/16.
 */
(function () {
    'use strict';

    angular.module('PMSWidget')
        .factory('PMSClkService',['$http','$q',PMSClkService]);
    
    function PMSClkService($http,$q) {
        function getClkPromise() {
             $http.jsonp('http://www.highcharts.com/samples/data/from-sql.php?callback=successCallback');
            // window.chartCb = function (data) {
            //     console.log(data);
            // }
            // var url = 'http://www.highcharts.com/samples/data/from-sql.php?callback=JSON_CALLBACK';
            //  return $resource(url,{callback:"JSON_CALLBACK"},{getClkData:{method:'JSONP'}});

        }
        function getAfterExtreme(e) {

            return $http.jsonp('http://www.highcharts.com/samples/data/from-sql.php?start='+ Math.round(e.min) +
                '&end='+ Math.round(e.max) +'&callback=afterExtremeCb');
        }

        return {
            getClkPromise:getClkPromise,
            getAfterExtreme:getAfterExtreme
        }
    //     var promise = {};
    //     var url = 'http://www.highcharts.com/samples/data/from-sql.php?callback=JSON_CALLBACK';
    //
    //     promise.getClkPromise = function () {
    //         var defer = $q.defer();
    //
    //         $http.jsonp(url);
    //         window.chartCallBack = function (data) {
    //             defer.resolve(data);
    //
    //         }
    //
    //         return defer.promise;
    //     }
    //
    //     return promise;
    //
    }
})()