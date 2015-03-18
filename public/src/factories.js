//create our resource as a factory

angular.module('videosApp')
	.factory('Video', function ($resource) {
		return $resource('/api/video/:id', { id : '@id'});	//'api/video/:id' links to the id of each of our resource instances 
	});
