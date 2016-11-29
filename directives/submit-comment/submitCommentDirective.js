Community.directive('submitComment', ['ProfileDB','Community', function(ProfileDB, Community) {
	return {
		restrict: 'E',
		scope: {
            community:'=',
            commentDepth:'=',
            parent:'=',
            rootParent:'='
		},
		replace: true,
		templateUrl: 'directives/submit-comment/submitCommentDirective.html',
		controller: function($scope){
            //console.log($scope.community);
            
            $scope.showSubmitCommentPanel = false;
            
            $scope.newComment = {
                poster: ProfileDB.getCurrentAccount(),
                media:'self',
                community: $scope.community,
                comment: null,
                parent: $scope.parent,
                rootParent: $scope.rootParent
            };
            
            $scope.borderWidth = 0;
            $scope.borderTop = 8;
            $scope.marginLeft = 0;
            $scope.marginBottom = 8;
            $scope.marginRight = 0;
            $scope.paddingLeft = 0;
            
            if($scope.commentDepth > 0){
                $scope.borderTop = 4;
                $scope.borderWidth = 4;
                $scope.marginLeft = 0;
                $scope.marginBottom = 0;
                $scope.marginRight = 0;
                $scope.paddingLeft = 4;
            }
            
            $scope.submitComment = function(){
                console.log($scope.newComment);
                Community.submitComment($scope.newComment).then(
                function(txHash){
                    if(txHash){
                        console.log('Comment waiting to be included in a block. tx hash: ' + txHash);
                    } else {
                        console.log('Not a valid comment.');
                    }
                }, function(error){
                    console.error(err);
                });
            };
        },
		link : function($scope, element, attrs) {
            
		}
	}
}]);