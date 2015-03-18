angular.module('videosApp')
	.controller('ListController', function ($scope, Video){
		$scope.videos = Video.query();
		$scope.fields = ['id', 'title', 'longDescription', 'logo-image'];

		$scope.sort = function (field) {
			$scope.sort.field = field;
			$scope.sort.order = !$scope.sort.order;
		};

		$scope.sort.field = 'id';
		$scope.sort.order = false;
	});