custom_app.controller('dashboardController', function ($scope, $localStorage, TopicFactory){
	TopicFactory.index(function (data){
		console.log(data);
		$scope.topics = data;
	})
	$scope.user = $localStorage.user
	$scope.addTopic = function (topic){
		TopicFactory.create($scope.newTopic, function (data){
			$scope.topic = data;
			$scope.newTopic = {};
		})
	}
})