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
			if (!req.body.description){
				res.json('You must enter something into the message field.')
			}
			else{
				var post = new Post(req.body);
				post.save(function (err){
					if (err){
						console.log(err);
					}
					else{
						Topic.findOneAndUpdate({_id: req.body._topic}, {$push: {'posts': req.body.id}}, function (err, results){
						if(err){
							console.log(err);
						}
						
				})
						res.json(post);
					}
				})
			}
		}
	}
})();