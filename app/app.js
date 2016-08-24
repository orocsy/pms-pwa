(function() {
	'use strict';
	angular.module('DashboardPage', []);
	angular.module('DataEntryPage', []);
	angular.module('PMSHeader', []);
	angular.module('PMSSearchBar', []);
	angular.module('PMSToDo', []);
	angular.module('PMSWidget', []);
	angular.module('PMSPickupPreference', []);


	angular.module('PMSApp', [
		'DashboardPage',
		'DataEntryPage',
		'PMSHeader',
		'PMSSearchBar',
		'PMSToDo',
		'PMSWidget',
		'PMSPickupPreference',
		'ui.router',
		'tc.chartjs',
		'ngResource'
	])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
        $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: 'DashboardPage/DashboardPage.html',
            controller: 'pmsDashboardPageCtrl',
            controllerAs : 'dashboardVm'
        })
        .state('data-entry', {
            url: '/data-entry',
            templateUrl: 'DataEntryPage/DataEntryPage.html',
            controller: 'pmsDataEntryPageCtrl',
            controllerAs : 'dataEntryVm'
        });
	}]);
})();