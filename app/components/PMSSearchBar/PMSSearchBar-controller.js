(function() {
    'use strict';

    angular.module('PMSSearchBar')
    .controller('pmsSearchBarCtrl', ['$scope', '$state', pmsSearchBarCtrl]);

    function pmsSearchBarCtrl($scope, $state) {
        var searchBarVm = this;
        searchBarVm.ddwn = 'Patient';
        searchBarVm.srchPlaceholder = 'Patient Last Name, Date of Birth';

        $scope.$watch('searchBarVm.ddwn', function() {
        	if (searchBarVm.ddwn == 'Patient') {
        		searchBarVm.srchPlaceholder = 'Patient Last Name, Date of Birth';
        	} else if(searchBarVm.ddwn == 'Prescriber') {
        		searchBarVm.srchPlaceholder = 'Prescriber Last Name, Phone Number or Prescriber ID';
        	} else if(searchBarVm.ddwn == 'Payer') {
        		searchBarVm.srchPlaceholder = 'Plan Name or Plan ID';
        	} else if(searchBarVm.ddwn == 'Drug') {
        		searchBarVm.srchPlaceholder = 'Drug Name or Quick Code';
        	}
        });
    }
})();
