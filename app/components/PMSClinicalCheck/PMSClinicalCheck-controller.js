(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsClinicalCheckCtrl', ['$scope', 'pmsDashboardPageService', pmsClinicalCheckCtrl]);

    function pmsClinicalCheckCtrl($scope, pmsDashboardPageService) {
        var pmsClinicalCheckVm = this;
        pmsClinicalCheckVm.addText = addText;
        pmsClinicalCheckVm.options = {
          responsive: true,
          onAnimationComplete : pmsClinicalCheckVm.addText
        };
        /*pmsClinicalCheckVm.options = {

          // Sets the chart to be responsive
          responsive: true,

          //Boolean - Whether we should show a stroke on each segment
          segmentShowStroke : false,

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
          legendTemplate : ''

        };*/

        var promise = pmsDashboardPageService.getDashboardPromise();
        promise.then(successCallback, errorCallback);
        function successCallback(response) {
        	var arr = response.data.RXDashboard;
            for (var i=0; i< arr.length; i++) {
                if (arr[i].title == 'Clinical Check') {
                    var pie1Value = parseInt(arr[i].donetvalue);
                    var pie2Value = 100-pie1Value;
                    pmsClinicalCheckVm.donetLabel = arr[i].donetlable;
                    pmsClinicalCheckVm.centerTxt = pie1Value;
                }
            }

            /*pmsClinicalCheckVm.data = [
              {
                value: pie2Value,
                color: '#a9a9a9',
              },
              {
                value: pie1Value,
                color:'#2b7baf',
              }
            ];*/

            pmsClinicalCheckVm.data = {
              datasets: [{
                  data: [
                      pie2Value,
                      pie1Value
                  ],
                      backgroundColor: [
                      "#a9a9a9",
                      "#2b7baf"
                  ],
              }],
              labels: [
              ]
            };

            var ctx = document.getElementById("cc-canvas").getContext("2d");
            var chartObj = new Chart(ctx, {
                type: 'doughnut',
                data: pmsClinicalCheckVm.data,
                options: pmsClinicalCheckVm.options
            });
            pmsClinicalCheckVm.addText();
        }

        function errorCallback(response) {

        }

        function addText() {
          var canvas = document.getElementById("cc-canvas");
          var ctx = document.getElementById("cc-canvas").getContext("2d");
          var cx = parseInt(canvas.style.width) / 2;
          var cy = parseInt(canvas.style.height) / 2;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = '25px Arial';
          ctx.fillStyle = 'black';
          ctx.fillText(pmsClinicalCheckVm.centerTxt, cx, cy);
        }
    }
})();
