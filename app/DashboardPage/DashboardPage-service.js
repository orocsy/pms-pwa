(function() {
	'use strict';
	angular
	.module('DashboardPage')
	.factory('pmsDashboardPageService', ['$http', pmsDashboardPageService]);

	function pmsDashboardPageService($http) {
		var promise;
		return {
			getDashboardApi : getDashboardApi,
			getDashboardPromise : getDashboardPromise
		};

		function getDashboardApi() {
            promise = $http({
		      method: 'GET',
		      url: 'https://demo0434460.mockable.io/dashboard'
		    });
            // promise = $http.jsonp('https://demo6223557.mockable.io/dashboard?callback=JSON_CALLBACK');
		}

		function getDashboardPromise() {
			return promise;
		}
	}
})();
