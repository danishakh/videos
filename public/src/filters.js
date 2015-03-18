angular.module('videosApp')

	//filter for displaying the table header fields in list.html (not being used currently)
	.filter('labelCase', function () {
		return function (input){
			input = input.replace(/([A-Z])/g, ' $1');
			return input[0].toUpperCase() + input.splice(1);
		};
	})

	//another filter to set the offset for pagination
	.filter('offset', function() {
  		return function(input, start) {
    	start = parseInt(start, 10);
    	return input.slice(start);
  		};
	});
