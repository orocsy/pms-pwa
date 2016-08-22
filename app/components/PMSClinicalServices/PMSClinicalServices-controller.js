(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsClinicalServicesCtrl', ['$scope', 'PMSClsService', pmsClinicalServicesCtrl]);

    function pmsClinicalServicesCtrl($scope, PMSClsService) {
        var pmsClinicalServicesVm = this;

        var promise = PMSClsService.getClsPromise();
        promise.then(successCallback, errorCallback);
        function successCallback(response) {
             pmsClinicalServicesVm.ClsData = response.data.ClsData;

            Highcharts.chart('PMSCls',{
                chart: {
                    type: 'scatter',
                    zoomType: 'xy'
                },
                title: {
                    text: 'Height Versus Weight of 507 Individuals by Gender'
                },
                subtitle: {
                    text: 'Source: Heinz  2003'
                },
                xAxis: {
                    title: {
                        enabled: true,
                        text: 'Height (cm)'
                    },
                    startOnTick: true,
                    endOnTick: true,
                    showLastLabel: true
                },
                yAxis: {
                    title: {
                        text: 'Weight (kg)'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'top',
                    x: 100,
                    y: 70,
                    floating: true,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                    borderWidth: 1
                },
                plotOptions: {
                    scatter: {
                        marker: {
                            radius: 5,
                            states: {
                                hover: {
                                    enabled: true,
                                    lineColor: 'rgb(100,100,100)'
                                }
                            }
                        },
                        states: {
                            hover: {
                                marker: {
                                    enabled: false
                                }
                            }
                        },
                        tooltip: {
                            headerFormat: '<b>{series.name}</b><br>',
                            pointFormat: '{point.x} cm, {point.y} kg'
                        }
                    }
                },
                series:pmsClinicalServicesVm.ClsData
            });
        }

        function errorCallback(response) {

        }
    }
})();
