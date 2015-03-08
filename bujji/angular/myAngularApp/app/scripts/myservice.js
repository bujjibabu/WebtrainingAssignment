'use strict';

angular.module('testAppApp').factory('myservice', function() {
	var application = function(data) {
		angular.extend(this, data);
	};

	application.commonobject = null;
	
	return application;
});