(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsClinicalServicesCtrl', ['$scope', 'pmsDashboardPageService', pmsClinicalServicesCtrl]);

    function pmsClinicalServicesCtrl($scope, pmsDashboardPageService) {
        var pmsClinicalServicesVm = this;
        pmsClinicalServicesVm.addText = addText;
        pmsClinicalServicesVm.options = {
          responsive: true,
          onAnimationComplete : pmsClinicalServicesVm.addText
        };
        /*pmsClinicalServicesVm.options = {

          // Sets the chart to be responsive
          responsive: true,

          //Boolean - Whether we should show a stroke on each segment
          segmentShowStroke : true,

          //String - The colour of each segment stroke
          segmentStrokeColor : '#fff',

          //Number - The width of each segment stroke
          segmentStrokeWidth : 2,

          //Number - The percentage of the chart that we cut out of the middle
          percentageInnerCutout : 50, // This is 0 for Pie charts

          //Number - Amount of animation steps
          animationSteps : 100,

          //String - Animation easing effect
          animationEasing : 'easeOutBounce',

          //Boolean - Whether we animate the rotation of the Doughnut
          animateRotate : true,

          //Boolean - Whether we animate scaling the Doughnut from the centre
          animateScale : false,

          //String - A legend template
          legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'

        };*/

        var promise = pmsDashboardPageService.getDashboardPromise();
        promise.then(successCallback, errorCallback);
        function successCallback(response) {
            var arr = response.data.RXDashboard;
            for (var i=0; i< arr.length; i++) {
                if (arr[i].title == 'Clinical Services') {
                    var pie1Value = parseInt(arr[i].pie1value);
                    var pie2Value = parseInt(arr[i].pie2value);
                    pmsClinicalServicesVm.pie1Label = arr[i].pie1display;
                    pmsClinicalServicesVm.pie2Label = arr[i].pie2display;
                    pmsClinicalServicesVm.centerTxt = pie1Value + pie2Value;
                }
            }

            /*pmsClinicalServicesVm.data = [
              {
                value: pie2Value,
                color: '#00aad6',
                label: pie2Label
              },
              {
                value: pie1Value,
                color:'#2b7baf',
                label: pie1Label
              }
            ];*/

            pmsClinicalServicesVm.data = {
              datasets: [{
                  data: [
                      pie2Value,
                      pie1Value
                  ],
                      backgroundColor: [
                      "#00aad6",
                      "#2b7baf"
                  ],
              }],
              labels: [
              ]
            };

            var ctx = document.getElementById("cs-canvas").getContext("2d");
            var chartObj = new Chart(ctx, {
                type: 'doughnut',
                data: pmsClinicalServicesVm.data,
                options: pmsClinicalServicesVm.options
            });
            setTimeout(pmsClinicalServicesVm.addText, 3000);
        }

        function errorCallback(response) {

        }
        function addText() {
          var canvas = document.getElementById("cs-canvas");
          var ctx = document.getElementById("cs-canvas").getContext("2d");
          var cx = parseInt(canvas.style.width) / 2;
          var cy = parseInt(canvas.style.height) / 2;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = '25px Arial';
          ctx.fillStyle = 'black';
          ctx.fillText(pmsClinicalServicesVm.centerTxt, cx, cy);
        }
    }
})();
