(function() {
  'use strict';
  angular.module('DashboardPage')
  .controller('pmsDashboardPageCtrl', [
    '$scope',
    '$stateParams',
    'pmsDashboardPageService',
    pmsDashboardPageCtrl
  ]);

  function pmsDashboardPageCtrl(
    $scope,
    $stateParams,
    pmsDashboardPageService
  ) {
    var dashboardVm = this;
    pmsDashboardPageService.getDashboardApi();

    Highcharts.chart('container1', {
      chart:{
        type:'bar'
      },

      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    });



  }

})();
