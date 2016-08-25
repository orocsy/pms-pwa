(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsProductReviewCtrl', ['$scope', 'PMSPdrService', pmsProductReviewCtrl]);

    function pmsProductReviewCtrl($scope, PMSPdrService) {
        var pmsProductReviewVm = this;
        // var promise = PMSPdrService.getPdrPromise();
        // promise.then(successCallback, errorCallback);
        // function successCallback(response) {
        // 	var arr = response.data.RXDashboard;
        //     Highcharts.chart('PMSPdr',{
        //         data: {
        //             table: 'freq',
        //             startRow: 1,
        //             endRow: 17,
        //             endColumn: 7
        //         },
        //
        //         chart: {
        //             polar: true,
        //             type: 'column'
        //         },
        //
        //         title: {
        //             text: 'Wind rose for South Shore Met Station, Oregon'
        //         },
        //
        //         subtitle: {
        //             text: 'Source: or.water.usgs.gov'
        //         },
        //
        //         pane: {
        //             size: '85%'
        //         },
        //
        //         legend: {
        //             align: 'right',
        //             verticalAlign: 'top',
        //             y: 100,
        //             layout: 'vertical'
        //         },
        //
        //         xAxis: {
        //             tickmarkPlacement: 'on'
        //         },
        //
        //         yAxis: {
        //             min: 0,
        //             endOnTick: false,
        //             showLastLabel: true,
        //             title: {
        //                 text: 'Frequency (%)'
        //             },
        //             labels: {
        //                 formatter: function () {
        //                     return this.value + '%';
        //                 }
        //             },
        //             reversedStacks: false
        //         },
        //
        //         tooltip: {
        //             valueSuffix: '%'
        //         },
        //
        //         plotOptions: {
        //             series: {
        //                 stacking: 'normal',
        //                 shadow: false,
        //                 groupPadding: 0,
        //                 pointPlacement: 'on'
        //             }
        //         }
        //     });
        // }

        // function errorCallback(response) {
        //
        // }
    }
})();
