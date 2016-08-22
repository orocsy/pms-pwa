(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsRaCtrl', ['PMSTphService', pmsRaCtrl]);

    function pmsRaCtrl(PMSTphService) {
        var pmsRaVm = this;

        var promise = PMSTphService.getPMSTphPromise();
        promise.then(successCallback, errorCallback);
        function successCallback(response) {
            var pieData = response.data.pieData;
            Highcharts.chart('PMSRaChart',{
                chart:{
                    type:'pie',
                    reflow:true,
                    height:200
                },
                title:{
                    text:'Usage Data'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            connectorPadding:0,
                            zIndex:100
                        }
                    }
                },
                series:[
                    {
                        data:pieData
                    }
                ]
            })
        }

        function errorCallback(response) {

        }
    }
})();
