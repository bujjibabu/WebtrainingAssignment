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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.myname = myservice.commonobject;
  });
