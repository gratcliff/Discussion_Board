custom_app.factory('UserFactory', function ($http){
	var factory = {};
	var users = [];
	factory.index = function (callback){
		$http.get('/users').success(function (res_users){
			users = res_users;
			callback(users);
		})
	}
	factory.create = function (info, callback){
		console.log(info);
		$http.post('/users', {name: info.name}).success(function (output){
			if (output){
				console.log('new user: ' + output.name);
				users.push({name:output.name});
				callback(users);
			}
		})
	}
	return factory
})