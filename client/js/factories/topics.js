custom_app.factory('TopicFactory', function ($http){
	var factory = {};
	var topics = [];
	factory.index = function (callback){
		$http.get('/topics').success(function (res_topics){
			topics = res_topics;
			callback(topics);
		})
	}
	factory.getOne = function (info, callback){
		$http.get(info).success(function (res_topics){
			topics = res_topics;
			callback(topics);
		})
	}

	factory.create = function (info, callback){
		console.log(info);
		$http.post('/topics', {topic: info.topic, category: info.category, description: info.description, user: info.user}).success(function (output){
			if (output){
				console.log('new topic: ' + output.topic);
				topics.push({topic: output.topic, category: output.category, description: output.description, user: output.user});
				callback(topics);
			}
		})
	}
	return factory
})