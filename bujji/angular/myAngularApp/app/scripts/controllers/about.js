'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('AboutCtrl', function ($scope,myservice) {

    $scope.myname = myservice.commonobject;

     $scope.myInterval = 5000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length + 1;
	    slides.push({
	      image: 'http://placekitten.com/' + newWidth + '/300',
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }


	    $scope.alerts = [
    { type: 'warning', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'danger', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  });
