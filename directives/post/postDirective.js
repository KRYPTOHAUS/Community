Community.directive('postCard', [ 
function() {
	return {
		restrict: 'E',
		scope: {
            postUrl: '='
		},
		replace: true,
		templateUrl: 'directives/post/postDirective.html',
		controller: function($scope){
            
		},
		link : function($scope, $element, $attrs) {
            //console.log($scope.postUrl);
		}
	}
}]);