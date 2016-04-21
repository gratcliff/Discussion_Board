custom_app.controller('UserController', function ($scope, UserFactory){
	UserFactory.index(function (data){
		$scope.users = data;
	})
})