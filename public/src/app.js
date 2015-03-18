//create/configure our angular application

angular.module('videosApp', ['ngRoute', 'ngResource'])			//added ngRoute and ngResource dependecies to the application
	.config(function ($routeProvider, $locationProvider){
		$routeProvider
			.when('/videos', {				//when route matches '/videos', call controller and render template
				controller: 'ListController',
				templateUrl: 'views/list.html'
			});
		$locationProvider.html5Mode(true);			//enable this because we don't want to use the default '/#!/videos'
	});

