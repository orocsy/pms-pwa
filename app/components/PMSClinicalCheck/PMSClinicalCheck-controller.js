(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsClinicalCheckCtrl', ['PMSClkService', pmsClinicalCheckCtrl]);

    function pmsClinicalCheckCtrl(PMSClkService) {
        var pmsClinicalCheckVm = this;

        // var promise = PMSClkService.getClkPromise();
        // // var promise = PMSClkService.getClkPromise().getClkData().$promise;
        // promise.then(successCallback, errorCallback);
        // function successCallback(response) {
        //     console.log(response);
        var chart = null;
        $.getJSON('http://www.highcharts.com/samples/data/from-sql.php?callback=?', function(data) {

            // Add a null value for the end date
            data = [].concat(data, [[Date.UTC(2011, 9, 14, 19, 59), null, null, null, null]]);

            // create the chart
            chart = new Highcharts.StockChart({
                chart : {
                    renderTo : 'PMSClk',
                    type: 'candlestick',
                    zoomType: 'x'
                },

                navigator : {
                    adaptToUpdatedData: false,
                    series : {
                        data : data
                    }
                },

                title: {
                    text: 'AAPL history by the minute from 1998 to 2011'
                },

                subtitle: {
                    text: 'Displaying 1.7 million data points in Highcharts Stock by async server loading'
                },

                rangeSelector : {
                    buttons: [{
                        type: 'hour',
                        count: 1,
                        text: '1h'
                    }, {
                        type: 'day',
                        count: 1,
                        text: '1d'
                    }, {
                        type: 'month',
                        count: 1,
                        text: '1m'
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1y'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    inputEnabled: false, // it supports only days
                    selected : 4 // all
                },

                xAxis : {
                    events : {
                        afterSetExtremes : afterSetExtremes
                    },
                    minRange: 3600 * 1000 // one hour
                },

                series : [{
                    data : data,
                    dataGrouping: {
                        enabled: false
                    }
                }]
            });
        });


            function afterSetExtremes(e) {

                var url,
                    currentExtremes = this.getExtremes(),
                    range = e.max - e.min;

                chart.showLoading('Loading data from server...');
                PMSClkService.getAfterExtreme().then(function (response) {
                    chart.series[0].setData(response);
                    chart.hideLoading();
                });

            }



        // }
        //
        // function errorCallback(response) {
        //     console.log(response);
        // }
    }
})();
