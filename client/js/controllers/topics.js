custom_app.controller('topicController', function ($scope, $localStorage, $location, TopicFactory, PostFactory, CommentFactory){
	
	TopicFactory.getOne($location.url(), function (data){
		$scope.topics = data;
	})
	$scope.user = $localStorage.user

	$scope.topic_id = ($location.url()).slice(7);
	console.log($scope.topic_id);

	PostFactory.index($scope.topic_id, function (data){
		$scope.posts = data;
	})

	$scope.addPost = function (){
		$scope.newPost.topic_id = $scope.topic_id;
		$scope.newPost.user = $scope.user
		PostFactory.create($scope.newPost, function (data){
			$scope.posts = data;
			$scope.newPost = {};
		})
	}
	$scope.addComment = function (comment){
		console.log(comment);
		CommentFactory.create($scope.newComment, function (data){
			$scope.comments = data;
			$scope.newComment = {};
		})
	}
})