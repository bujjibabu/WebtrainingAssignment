'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('MainCtrl', function ($scope,$rootScope,myservice) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.fnPopover = function(){
    	 $('#pop').popover('toggle');
    }
    myservice.commonobject = 'bujjibabu';
    $scope.name = myservice.commonobject;
    
   $rootScope.testmsg = 'this is my common objet';
  });
