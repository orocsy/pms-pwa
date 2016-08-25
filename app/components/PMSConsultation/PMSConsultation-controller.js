(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsConsultationCtrl', ['pmsConsultationService', pmsConsultationCtrl]);

    function pmsConsultationCtrl(pmsConsultationService) {
        var pmsConsultationVm = this;

        var promise = pmsConsultationService.getCstPromise();
        promise.then(successCallback, errorCallback);
        function successCallback(response) {
            pmsConsultationVm.cstData = response.data.cstData;
            // console.log(pmsConsultationVm.cstData.series);
            Highcharts.chart('PMSConsChart',{
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'US and USSR nuclear stockpiles'
                },
                subtitle: {
                    text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                    'thebulletin.metapress.com</a>'
                },

                xAxis: {
                    allowDecimals: false,
                    labels: {
                        formatter: function () {
                            return this.value; // clean, unformatted number for year
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: 'Nuclear weapon states'
                    },
                    labels: {
                        formatter: function () {
                            return this.value / 1000 + 'k';
                        }
                    }
                },
                tooltip: {
                    pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
                },
                plotOptions: {
                    area: {
                        pointStart: 1940,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series:pmsConsultationVm.cstData.series
            });
        }

        function errorCallback(response) {

        }
    }
})();
