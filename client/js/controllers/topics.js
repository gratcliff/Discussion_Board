custom_app.controller('topicController', function ($scope, $localStorage, $location, TopicFactory, PostFactory, CommentFactory){
	$scope.error = "";
	TopicFactory.getOne($location.url(), function (data){
		$scope.topics = data;
	})
	$scope.user = $localStorage.user

	$scope.topic_id = ($location.url()).slice(7);

	PostFactory.index($scope.topic_id, function (data){
		$scope.posts = data;
	})
	// PostFactory.getErrors(function (data){
	// 	$scope.error = data;
	// })

	// CommentFactory.index($scope._post, function (data){
	// 	$scope.comments = data;
	// })
	$scope.upVote = function (){
		PostFactory.upvote(function (data){
			$scope.posts = data;
		})
	}
	$scope.downVote = function (){
		PostFactory.downvote(function (data){
			$scope.posts = data;
		})
	}
	$scope.addPost = function (){
		$scope.newPost.topic_id = $scope.topic_id;
		$scope.newPost.user = $scope.user
		PostFactory.create($scope.newPost, function (data){
			$scope.posts = data;
			$scope.newPost = {};
		})
	}
	$scope.addComment = function (newComment, postId){
		$scope.newComment = {};
		$scope.newComment.description = newComment;
		$scope.newComment._post = postId;
		$scope.newComment.user = $scope.user;
		console.log($scope.newComment);
		CommentFactory.create($scope.newComment, function (data){
			$scope.comments = data;
			$scope.newComment = {};
		})
		PostFactory.index($scope.topic_id, function (data){
		$scope.posts = data;
	})
	}
})