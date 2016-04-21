var mongoose = require('mongoose');
var Comment = mongoose.model('comment');
module.exports = (function (){
	return {
		create: function (req, res){
			Post.findOne({_id: req.params.id}, function (err, post){
				var comment = new Comment(req.body);
				comment._post = post._id;
				post.comments.push(comment);
				comment.save(function (err){
					if (err){
						console.log(err);
					}	
					else{
					res.json(comment);
					console.log('Created: ' + comment);
					}
				})
			})
		}
	}
})();