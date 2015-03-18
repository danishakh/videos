angular.module('videosApp')
	.factory('Video', function ($resource) {
		return $resource('/api/video/:id', { id : '@id'})
	});