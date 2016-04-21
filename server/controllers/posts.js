var mongoose = require('mongoose');
var Post = mongoose.model('post');
var Topic = mongoose.model('topic')
module.exports = (function (){
	return {
		index: function (req, res){
			Post.find({_topic: req.params.id}, function (err, results){
				if (err){
					console.log(err);
				}
			})
			.populate('comments')
			.exec(function (err, results){
				res.json(results)
			})
		},
		create: function (req, res){
			console.log(req.body._topic)
			var post = new Post(req.body);
			post.save(function (err){
				console.log(req.body.description)
				if (err){
					console.log(err);
				}
				else{
					Topic.findOneAndUpdate({_id: req.body._topic}, {$push: {'posts': req.body.id}}, function (err, results){
					if(err){
						console.log(err);
					}
					else{
						console.log(results);
					}
					
			})
					res.json(post);
				}
			})
		}
	}
})();