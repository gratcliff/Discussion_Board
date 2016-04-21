custom_app.controller('LoginController', function ($scope, $location, $localStorage, UserFactory){
	$scope.addUser = function (){
		$localStorage.user = $scope.newUser.name;
		$location.path('dashboard')
	}
})