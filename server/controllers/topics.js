var mongoose = require('mongoose');
var Topic = mongoose.model('topic');
var Post = mongoose.model('post');
module.exports = (function (){
	return {
		index: function (req, res){
			Topic.find({}, function (err, results){
				if (err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},
		getOne: function (req, res){
			Topic.findOne({_id:req.params.id}, function (err, results){
				if (err){
					console.log(err);
				}
				else{
					res.json (results);
				}
			})
		},
		create: function (req, res){
			var topic = new Topic({topic: req.body.topic, description: req.body.description, category: req.body.category, user: req.body.user, number_posts : req.body.number_posts});
			topic.save(function (err){
				if (err){
					console.log(err);
				}
				else{
					res.json(topic);
					console.log('Created: ' + topic);
				}
			})
		}
	}
})();