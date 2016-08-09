(function() {
    'use strict';

    angular.module('PMSPickupPreference')
    .controller('pmsPickupPreferenceCtrl', ['$scope', '$state', '$http', pmsPickupPreferenceCtrl]);

    function pmsPickupPreferenceCtrl($scope, $state, $http) {
        var preferenceVm = this;
        preferenceVm.payLoad = {};
        preferenceVm.setSelection = setSelection;
        preferenceVm.setPreference = setPreference;
        preferenceVm.payLoad.selection = '';

        var tmpWaitingTime = moment().add(15, 'minutes').calendar();
        var tmpTodayTime = moment().add(90, 'minutes').calendar();
        var tmpTomorrowTime = moment().add(24, 'hours').calendar();
        preferenceVm.waitingTime = tmpWaitingTime.substring(tmpWaitingTime.length-7);
        preferenceVm.todayTime = tmpTodayTime.substring(tmpTodayTime.length-7);
        preferenceVm.tomorrowTime = tmpTomorrowTime.substring(tmpTomorrowTime.length-7);

        function setSelection(selection) {
        	preferenceVm.payLoad.selection = selection;
        }

        function setPreference(form) {
        	preferenceVm.submitted = true;

        	if (preferenceVm.payLoad.comments && preferenceVm.payLoad.selection) {
        		$http.post('https://demo6223557.mockable.io/pickup-preference', preferenceVm.payLoad, {}).then(successCallback, errorCallback);
        	}	
		    function successCallback(response) {
		        preferenceVm.postRes = response.data.msg;
		        $('#myModal').modal('toggle');
		        $('#pckp-thx-modal').modal();
		    }
		    function errorCallback(response) {
    		}
        }
    }
})();
