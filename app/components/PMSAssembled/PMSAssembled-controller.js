(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsAssembledCtrl', ['$scope', 'pmsDashboardPageService', pmsAssembledCtrl]);

    function pmsAssembledCtrl($scope, pmsDashboardPageService) {
        var pmsAssembledVm = this;
        pmsAssembledVm.addText = addText;
        pmsAssembledVm.options = {
          responsive: true,
          onAnimationComplete : pmsAssembledVm.addText,
        };
        /*pmsAssembledVm.options = {

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
                if (arr[i].title == 'Assembled') {
                    var pie1Value = parseInt(arr[i].donetvalue);
                    var pie2Value = 100-pie1Value;
                    pmsAssembledVm.donetLabel = arr[i].donetlable;
                    pmsAssembledVm.centerTxt = pie1Value;
                }
            }

            /*pmsAssembledVm.data = [
              {
                value: pie2Value,
                color: '#a9a9a9',
              },
              {
                value: pie1Value,
                color:'#2b7baf',
              }
            ];*/

            pmsAssembledVm.data = {
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

            var ctx = document.getElementById("assembled-canvas").getContext("2d");
            var chartObj = new Chart(ctx, {
                type: 'doughnut',
                data: pmsAssembledVm.data,
                options: pmsAssembledVm.options
            });

            setTimeout(pmsAssembledVm.addText, 3000);
        }

        function errorCallback(response) {

        }
        function addText() {
          var canvas = document.getElementById("assembled-canvas");
          var ctx = document.getElementById("assembled-canvas").getContext("2d");
          var cx = parseInt(canvas.style.width) / 2;
          var cy = parseInt(canvas.style.height) / 2;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = '25px Arial';
          ctx.fillStyle = 'black';
          ctx.fillText(pmsAssembledVm.centerTxt, cx, cy);
        }
    }
})();
