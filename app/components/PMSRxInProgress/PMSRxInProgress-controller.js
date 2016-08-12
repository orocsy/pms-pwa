(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsRxInProgressCtrl', ['$scope', 'pmsDashboardPageService', pmsRxInProgressCtrl]);

    function pmsRxInProgressCtrl($scope, pmsDashboardPageService) {
        var pmsRxInProgressVm = this;
        // pmsRxInProgressVm.options = {
        //   responsive: true,
        //   tooltips : {
        //       enabled : false
        //   }
        // };
        pmsRxInProgressVm.options ={

          // Sets the chart to be responsive
          responsive: true,

          //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
          scaleBeginAtZero : true,

          //Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines : false,

          //String - Colour of the grid lines
          scaleGridLineColor : "rgba(0,0,0,.05)",

          //Number - Width of the grid lines
          scaleGridLineWidth : 0,

          //Boolean - If there is a stroke on each bar
          barShowStroke : true,

          //Number - Pixel width of the bar stroke
          barStrokeWidth : 2,

          //Number - Spacing between each of the X value sets
          barValueSpacing : 10,

          //Number - Spacing between data sets within X values
          barDatasetSpacing : 1,

          //String - A legend template
          legendTemplate : '',
          showTooltips : false
        };
        var promise = pmsDashboardPageService.getDashboardPromise();
        promise.then(successCallback, errorCallback);
        function successCallback(response) {
            var arr = response.data.RXDashboard;
            for (var i=0; i< arr.length; i++) {
                if (arr[i].title == 'Rx in Progress') {
                    var monVal = parseInt(arr[i].Mon);
                    var tueVal = parseInt(arr[i].Tue);
                    var wedVal = parseInt(arr[i].Wed);
                    var thuVal = parseInt(arr[i].Thu);
                    var friVal = parseInt(arr[i].Fri);
                    var satVal = parseInt(arr[i].Sat);
                    var sunVal = parseInt(arr[i].Sun);
                    if(arr[i].today){
                        pmsRxInProgressVm.today = parseInt(arr[i].today);
                    }

                }
            }

            // pmsRxInProgressVm.data = {
            //   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            //   datasets: [
            //     {
            //       fillColor: '#00aad6',
            //       strokeColor: '#00aad6',
            //       highlightFill: '#00aad6',
            //       highlightStroke: '#00aad6',
            //       data: [monVal, tueVal, wedVal, thuVal, friVal, satVal, sunVal]
            //     }
            //   ]
            // };

            pmsRxInProgressVm.data = {
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [{
                  label: 'Rx in Progress',
                  backgroundColor: "#00aad6",
                  data: [monVal, tueVal, wedVal, thuVal, friVal, satVal, sunVal]
              }]
            };

            var ctx = document.getElementById("rx-inprgs-canvas").getContext("2d");
            var chartObj = new Chart(ctx, {
                type: 'bar',
                data: pmsRxInProgressVm.data,
                options: pmsRxInProgressVm.options
            });
        }

        function errorCallback(response) {
            console.log('failed promises');
        }
        // function isToday() {
        //
        //     if(pmsRxInProgressVm.today){
        //
        //     }
        // }
    }
})();
