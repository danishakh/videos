angular.module('videosApp', ['ngRoute', 'ngResource'])
	.config(function ($routeProvider, $locationProvider){
		$routeProvider
			.when('/videos', {
				controller: 'ListController',
				templateUrl: 'views/list.html'
			});
		$locationProvider.html5Mode(true);
	});

