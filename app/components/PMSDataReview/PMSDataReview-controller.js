(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsDataReviewCtrl', ['$scope', 'PMSDrService', pmsDataReviewCtrl]);

    function pmsDataReviewCtrl($scope, PMSDrService) {
        var pmsDataReviewVm = this;

        var promise = PMSDrService.getDrPromise();
        promise.then(successCallback, errorCallback);
        function successCallback(response) {
            console.log(response);
            Highcharts.chart('PMSDr',{
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Browser market shares. January, 2015 to May, 2015'
                },
                subtitle: {
                    text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Total percent market share'
                    }

                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}%'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },

                series: response.data.series,
                drilldown: response.data.drilldown
            });



        }

        function errorCallback(response) {

        }

    }
})();
