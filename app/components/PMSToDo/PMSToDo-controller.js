(function() {
    'use strict';

    angular.module('PMSToDo')
    .controller('pmsToDoCtrl', ['$scope', '$http', pmsToDoCtrl]);

    function pmsToDoCtrl($scope, $http) {
        var toDoVm = this;
        var counter = 0;
        setTimeout(showBlnkBtn, 9000);
        var myVar = setInterval(blink, 1000);

        $http({
		  method: 'GET',
		  url: 'https://demo0434460.mockable.io/todo'
		}).then(successCallback, errorCallback);

		function successCallback(response) {
			toDoVm.toDos = response.data.RXToDoNext;
		}

		function errorCallback(response) {
		}

		function blink() {
			var elm = $('.btn-blnk');
			var triangleElm = $('#img-blnk');
			if (elm.hasClass('btn-orange')) {
				elm.removeClass('btn-orange');
				elm.addClass('btn-white');
				triangleElm.attr('src', 'images/triangle-yellow.png');
			} else if (elm.hasClass('btn-white')) {
				elm.removeClass('btn-white');
				elm.addClass('btn-orange');
				triangleElm.attr('src', 'images/triangle.png');
			}
			counter++;
			if (counter >= 22) {
				stopBlnk();
			}
		}
		function showBlnkBtn() {
			var elm = $('.hide-todo-item');
			elm.show();
		}

		function stopBlnk() {
			clearInterval(myVar);
		}
    }
})();
