(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsIeCtrl', ['$scope', 'pmsDashboardPageService', pmsIeCtrl]);

    function pmsIeCtrl($scope, pmsDashboardPageService) {
        var pmsIeVm = this;
        pmsIeVm.addText = addText;
        pmsIeVm.options = {
          responsive: true,
          onAnimationComplete : pmsIeVm.addText
        };
        /*pmsIeVm.options = {

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
                if (arr[i].title == 'Inventory Exceptions') {
                    var pie1Value = parseInt(arr[i].donetvalue);
                    var pie2Value = 100-pie1Value;
                    pmsIeVm.donetLabel = arr[i].donetlable;
                    pmsIeVm.centerTxt = pie1Value;
                }
            }

            /*pmsIeVm.data = [
              {
                value: pie2Value,
                color: '#a9a9a9',
              },
              {
                value: pie1Value,
                color:'#e7bb0e',
              }
            ];*/

            pmsIeVm.data = {
              datasets: [{
                  data: [
                      pie2Value,
                      pie1Value
                  ],
                      backgroundColor: [
                      "#a9a9a9",
                      "#e7bb0e"
                  ],
              }],
              labels: [
              ]
            };

            var ctx = document.getElementById("ie-canvas").getContext("2d");
            var chartObj = new Chart(ctx, {
                type: 'doughnut',
                data: pmsIeVm.data,
                options: pmsIeVm.options
            });
            setTimeout(pmsIeVm.addText, 3000);
        }

        function errorCallback(response) {

        }
        function addText() {
          var canvas = document.getElementById("ie-canvas");
          var ctx = document.getElementById("ie-canvas").getContext("2d");
          var cx = parseInt(canvas.style.width) / 2;
          var cy = parseInt(canvas.style.height) / 2;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = '25px Arial';
          ctx.fillStyle = 'black';
          ctx.fillText(pmsIeVm.centerTxt, cx, cy);
        }
    }
})();
