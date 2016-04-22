var mongoose = require('mongoose');
var Comment = mongoose.model('comment');
var Post = mongoose.model('post');
module.exports = (function (){
	return {
		// index: function (req, res){
		// 	Comment.find({_post: req.params.id}, function (err, results){
		// 		console.log(results);
		// 		if (err){
		// 			console.log(err);
		// 		}
		// 		else{
		// 			res.json(results);
		// 		}
		// 	})
		// },
		create: function (req, res){
			var comment = new Comment(req.body.info);
			console.log(comment);
			comment.save(function (err){
				if (err){
					console.log(err);
				}	
				else{
					Post.findOneAndUpdate({_id: req.body.info._post}, {$push: {'comments': comment}}, function (err, results){
						console.log(results);
						if (err){
							console.log(err);
						}
					})
					res.json(comment);
				}
			})
		}
	}
})();