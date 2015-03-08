angular.module('myApp',['ngRoute']).config(function($routeProvider) {
		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'home.html',
				controller  : 'homeController'
			})
			// route for the about page
			.when('/about', {
				templateUrl : 'about.html',
				controller  : 'aboutController'
			})
			// route for the contact page
			.when('/contact', {
				templateUrl : 'contact.html',
				controller  : 'contactController'
			})
			.when('/main', {
				templateUrl : 'main.html',
				controller  : 'mainController'
			});
	}).controller('homeController', function($scope,$location) {
		// create a message to display in our view
		$scope.message = 'this is my home page controller';
		$scope.myArry = [
					{fname:'bujji',lname:'babu',name:'bujjibabu',dob:'06/06/1988',area:'hyderbad'},
					{fname:'bujji1',lname:'babu1',name:'bujjibabu1',dob:'06/06/198811',area:'hyderbad1'},
					{fname:'bujji2',lname:'babu2',name:'bujjibabu2',dob:'06/06/1988',area:'hyderbad4'},
					{fname:'bujji3',lname:'babu3',name:'bujjibabu3',dob:'06/06/19884',area:'hyderbad4'},
					{fname:'bujji4',lname:'babu4',name:'bujjibabu4',dob:'06/06/19885',area:'hyderbad3'},
					{fname:'bujji5',lname:'babu5',name:'bujjibabu5',dob:'06/06/19886',area:'hyderbadi'},
					{fname:'bujji6',lname:'babu6',name:'bujjibabu6',dob:'06/06/19887',area:'hyderbady'},
					{fname:'bujji7',lname:'babu7',name:'bujjibabu7',dob:'06/06/19888',area:'hyderbad6'}
				];
		$scope.fnContatpage = function(){
			$location.path('/contact')
		}

	}).controller('aboutController', function($scope) {
		// create a message to display in our view
		$scope.testmsg = 'this is my about page controller';
	}).controller('contactController', function($scope) {
		// create a message to display in our view
		$scope.contactmsg = 'this is my about page controller';
	}).controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.contactmsg = 'this is my about page controller';
		$scope.options = [
		{name:'option1',id:1},
		{name:'option2',id:2},
		{name:'option3',id:3},
		{name:'option4',id:4}];
	});