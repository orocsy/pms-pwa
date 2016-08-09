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
  }

})();
