angular.module('videosApp')
	
	//$location required for changing the url to the id of the video clicked in the list
	//Video factory is the resource we need from the backend
	.controller('ListController', function ($scope, Video, $location, $rootScope){		

		//set the PAGE attribute for the navbar as a rootScope
		//can be set in each controller to change the navbar selection
		$rootScope.PAGE = "all";

		//query the server to get all the current videos from the backend
		$scope.videos = Video.query();

		//choose the fields we want to display
		$scope.fields = ['id', 'title', 'short description', 'logo'];

		//sort the table based on different fields
		$scope.sort = function (field) {
			$scope.sort.field = field;
			$scope.sort.order = !$scope.sort.order;
		};
		$scope.sort.field = 'id';		//default field to sort
		$scope.sort.order = false;		//sort in ascending order and will toggled to true when the field header is clicked

		//shows the id of the selected video in the url
		$scope.show = function (id){
			$location.url('/video/' + id);
		}

		//pagination
		$scope.videosPerPage = 6;
		$scope.currentPage = 0;

		$scope.prevPage = function() {
			if ($scope.currentPage > 0) {
			  	$scope.currentPage--;
			}
		};

		$scope.prevPageDisabled = function() {
			return $scope.currentPage === 0 ? "disabled" : "";
		};

		$scope.pageCount = function() {
			return Math.ceil($scope.videos.length / $scope.videosPerPage);
		};

		$scope.nextPage = function() {
			if ($scope.currentPage < $scope.pageCount()-1) {
				$scope.currentPage++;
			}
		};

		$scope.nextPageDisabled = function() {
			return $scope.currentPage === $scope.pageCount()-1 ? "disabled" : "";
		};

		$scope.setPage = function(n) {
			$scope.currentPage = n;
		};
	});
