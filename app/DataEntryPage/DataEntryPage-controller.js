(function() {
  'use strict';
  angular.module('DataEntryPage')
  .controller('pmsDataEntryPageCtrl', [
    '$scope',
    '$http',
    pmsDataEntryPageCtrl
  ]);

  function pmsDataEntryPageCtrl(
    $scope,
    $http
  ) {
    var dataEntryVm = this;
    dataEntryVm.addDataEntry = addDataEntry;
    dataEntryVm.currentIndex = 0;
    dataEntryVm.next = next;
    dataEntryVm.prev = prev;
    dataEntryVm.payLoad = {};
    dataEntryVm.qtyRem = qtyRem;

    dataEntryVm.payLoad.drugExp = dataEntryVm.payLoad.refillsBfr = moment().format('M') + '/' + (parseInt(moment().format('YYYY'))+1);
    dataEntryVm.payLoad.substitute = dataEntryVm.payLoad.daw = 'No';
    $http({
      method: 'GET',
      url: 'https://demo6223557.mockable.io/patient-prescription'
    }).then(successCallback, errorCallback);

    function successCallback(response) {
      var resData = response.data.RXDataEntry;
      dataEntryVm.firstName = resData.firstname;
      dataEntryVm.lastName = resData.lastname;
      dataEntryVm.gender = resData.gender;
      dataEntryVm.dob = resData.date;
      dataEntryVm.age = resData.age;
      dataEntryVm.address = resData.address;
      dataEntryVm.phoneNo = resData.phno;
      dataEntryVm.idNo = resData.idno;
      dataEntryVm.rxImages = resData.rximages;
      dataEntryVm.rxImages[0].visible = true;
    }
    function errorCallback(response) {
    }

    function next() {
      dataEntryVm.currentIndex < dataEntryVm.rxImages.length - 1 ? dataEntryVm.currentIndex++ : dataEntryVm.currentIndex = 0;
    };

    function prev() {
      dataEntryVm.currentIndex > 0 ? dataEntryVm.currentIndex-- : dataEntryVm.currentIndex = dataEntryVm.rxImages.length - 1;
    };

    $scope.$watch('dataEntryVm.currentIndex', function() {
      angular.forEach(dataEntryVm.rxImages, function(image) {
        image.visible = false;
      });
      dataEntryVm.rxImages[dataEntryVm.currentIndex].visible = true; // make the current image visible
    });

    function addDataEntry(form) {
      dataEntryVm.submitted = true;
      if (form.$invalid) {
        return;
      }
      $http.post('https://demo6223557.mockable.io/data-entry', dataEntryVm.payLoad, {}).then(successCallback, errorCallback);

      function successCallback(response) {
        dataEntryVm.postRes = response.data.msg;
        $('#thx-modal').modal();
      }
    }

    function qtyRem() {
      if (dataEntryVm.payLoad.qty && dataEntryVm.payLoad.qtyDis) {
        dataEntryVm.payLoad.qtyRem = dataEntryVm.payLoad.qty - dataEntryVm.payLoad.qtyDis;
      } else {
        dataEntryVm.payLoad.qtyRem = '';
      }
    }

  }

})();
