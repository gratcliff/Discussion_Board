custom_app.factory('PostFactory', function ($http){
	var factory = {};
	var posts = [];
	var error = "";
	factory.getErrors = function (callback){
		callback(error);
	}
	factory.index = function (info, callback){
		console.log(info);
		$http.get('/posts/'+info).success(function (res_posts){
			posts = res_posts;
			callback(posts);
		})
	}
	factory.create = function (info, callback){
		console.log(info);
		$http.post('/posts', {_topic: info.topic_id, user: info.user, description: info.description, upvote: 1, downvote: 0}).success(function (output){
			if (output == 'You must enter something into the message field.'){
				error = output;
				callback(error)
			}
			else if (output){
				posts.push(output);
				callback(posts);
			}
		})
	}
	// factory.upvote = function (info, callback){
	// 	$http.post('/upvote', {upvote})
	// }
	return factory
})