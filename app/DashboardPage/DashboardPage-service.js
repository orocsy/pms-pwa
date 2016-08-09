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
            // promise = $http({
		    //   method: 'JSONP',
		    //   url: 'https://demo6223557.mockable.io/dashboard?callback=JSON_CALLBACK'
		    // });
            promise = $http.jsonp('https://demo6223557.mockable.io/dashboard?callback=JSON_CALLBACK');
		}

		function getDashboardPromise() {
			return promise;
		}
	}
})();
