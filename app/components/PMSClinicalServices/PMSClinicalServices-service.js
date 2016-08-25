/**
 * Created by seancai on 8/21/16.
 */
(function () {
    'use strict';

    angular.module('PMSWidget')
        .factory('PMSClsService',['$http',PMSClsService]);

    function PMSClsService($http) {
        function getClsPromise() {
            return $http({
                method:'GET',
                url:' https://demo0434460.mockable.io/cls.json '
            });
        }
        return {
            getClsPromise:getClsPromise
        }
    }
})()