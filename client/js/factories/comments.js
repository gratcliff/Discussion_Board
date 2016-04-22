custom_app.factory('CommentFactory', function ($http){
	var factory = {};
	var comments = [];
	// factory.index = function (info, callback){
	// 	console.log(info);
	// 	$http.get('/comments/'+info).success(function (res_comments){
	// 		comments = res_comments;
	// 		callback(comments);
	// 	})
	// }
	factory.create = function (info, callback){
		console.log(info);
		$http.post('/comments', {info}).success(function (output){
			if (output){
				console.log('new comment');
				comments.push({post: output._post, user: output.user, description: output.description});
				callback(comments);
			}
		})
	}
	return factory
})

