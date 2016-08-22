(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsTphCtrl', ['PMSTphService', pmsTphCtrl]);

    function pmsTphCtrl(PMSTphService) {
        var pmsTphVm = this;
        var promise = PMSTphService.getPMSTphPromise();

        promise.then(successCallback, errorCallback);
        function successCallback(response) {
        	pmsTphVm.options = response.data.options;
            console.log(pmsTphVm.options);
             Highcharts.chart('container',pmsTphVm.options);
        }

        function errorCallback(response) {

        }
    }
})();
