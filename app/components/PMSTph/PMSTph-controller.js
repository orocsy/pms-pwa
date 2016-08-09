(function() {
    'use strict';

    angular.module('PMSWidget')
    .controller('pmsTphCtrl', ['$scope', 'pmsDashboardPageService', pmsTphCtrl]);

    function pmsTphCtrl($scope, pmsDashboardPageService) {
        var pmsTphVm = this;
        pmsTphVm.addText = addText;
        pmsTphVm.options = {
          responsive: true,
          onAnimationComplete : pmsTphVm.addText
        };
        /*pmsTphVm.options ={

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
          legendTemplate : '<!--<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>-->'
        };*/
        var promise = pmsDashboardPageService.getDashboardPromise();
        promise.then(successCallback, errorCallback);
        function successCallback(response) {
        	var arr = response.data.RXDashboard;
            for (var i=0; i< arr.length; i++) {
                if (arr[i].title == 'Third Party Handling') {
                    var cv1 = parseInt(arr[i].circularvalue1);
                    var cv2 = parseInt(arr[i].circularvalue2);
                    var cv3 = parseInt(arr[i].circularvalue3);
                    var cv1Label = arr[i].circulardisplay1;
                    var cv2Label = arr[i].circulardisplay2;
                    var cv3Label = arr[i].circulardisplay3;
                    pmsTphVm.centerTxt = cv3;
                }
            }

            /*pmsTphVm.data = {
              labels: ['', '', ''],
              datasets: [
                {
                  label : cv1Label,
                  fillColor: '#e7bb0e',
                  strokeColor: '#e7bb0e',
                  highlightFill: '#e7bb0e',
                  highlightStroke: '#e7bb0e',
                  data: [cv1]
                },
                {
                  label : cv2Label,
                  fillColor: '#00aad6',
                  strokeColor: '#00aad6',
                  highlightFill: '#00aad6',
                  highlightStroke: '#00aad6',
                  data: [cv2]
                },
                {
                  label : cv3Label,
                  fillColor: '#2b7baf',
                  strokeColor: '#2b7baf',
                  highlightFill: '#2b7baf',
                  highlightStroke: '#2b7baf',
                  data: [cv3]
                }
              ]
            }; */ 
            pmsTphVm.data = {
              datasets: [{
                  data: [
                      100-cv3,
                      cv3
                  ],
                      backgroundColor: [
                      "#a9a9a9",
                      "#2b7baf"
                  ],
              },{
                  data: [
                      50,
                      50
                  ],
                      backgroundColor: [
                      "#ffffff",
                      "#ffffff"
                  ],
              },{
                  data: [
                      100-cv2,
                      cv2
                  ],
                      backgroundColor: [
                      "#a9a9a9",
                      "#00aad6"
                  ],
              },{
                  data: [
                      50,
                      50
                  ],
                      backgroundColor: [
                      "#ffffff",
                      "#ffffff"
                  ],
              },{
                  data: [
                      100-cv1,
                      cv1
                  ],
                      backgroundColor: [
                       "#a9a9a9",
                      "#e7bb0e"
                  ],
              } ],
              labels: [
                  
              ]
            };

            var ctx = document.getElementById("tph-canvas").getContext("2d");
            var chartObj = new Chart(ctx, {
                type: 'doughnut',
                data: pmsTphVm.data,
                options: pmsTphVm.options
            });
            setTimeout(pmsTphVm.addText, 3000);

            //tooltip
            pmsTphVm.tooltipHtml = '<div class="row de-tooltip"><div class="col-md-12 col-sm-12 col-lg-12"><div class="col-md-2 col-sm-2 col-lg-2 circle-value1"><span>'+cv3+'</span></div><div class="col-md-10 col-sm-10 col-lg-10 text-left"><span>'+cv3Label+'</span></div></div><div class="col-md-12 col-sm-12 col-lg-12"><div class="col-md-2 col-sm-2 col-lg-2 circle-value2"><span>'+cv2+'</span></div><div class="col-md-10 col-sm-10 col-lg-10 text-left"><span>'+cv2Label+'</span></div></div><div class="col-md-12 col-sm-12 col-lg-12"><div class="col-md-2 col-sm-2 col-lg-2 circle-value3"><span>'+cv1+'</span></div><div class="col-md-10 col-sm-10 col-lg-10 text-left"><span>'+cv1Label+'</span></div></div></div>';
            $('#tph-canvas').attr('title', pmsTphVm.tooltipHtml);
            $('[data-toggle="tooltip2"]').tooltip();
        }

        function errorCallback(response) {

        }
        function addText() {
          var canvas = document.getElementById("tph-canvas");
          var ctx = document.getElementById("tph-canvas").getContext("2d");
          var cx = parseInt(canvas.style.width) / 2;
          var cy = parseInt(canvas.style.height) / 2;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = '25px Arial';
          ctx.fillStyle = 'black';
          ctx.fillText(pmsTphVm.centerTxt, cx, cy);
        }
    }
})();
