(function() {
    'use strict';

    angular.module('PMSHeader')
    .controller('pmsHeaderCtrl', ['$scope', '$state', '$http', pmsHeaderCtrl]);

    function pmsHeaderCtrl($scope, $state, $http) {
        var headerVm = this;
        var d= new Date();
        headerVm.datetime = d.toLocaleString();


		$http({
		  method: 'GET',
		  url: 'https://demo0434460.mockable.io/profile.json '
		}).then(successCallback, errorCallback);

		function successCallback(response) {
			// var resData = response.data.PMSHeader;
			console.log(response);
			headerVm.systemstatus = response.data.systemstatus;
			headerVm.pharmacist = response.data.pharmacist;
			headerVm.username = response.data.username;
			// headerVm.systemstatus = resData.systemstatus;
			// headerVm.pharmacist = resData.pharmacist;
			// headerVm.username = resData.username;
		}
		function errorCallback(response) {
			console.log(response +' ' + 'PMS Header Promises Failed lol');
		}
    }
})();
