var mongoose = require('mongoose');
var User = mongoose.model('user');
module.exports = (function (){
	return {
		index: function (req, res){
			User.find({}, function (err, results){
				if (err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},
		create: function (req, res){
			var user = new User({name: req.body.name});
			user.save(function (err){
				if (err){
					console.log(err);
				}
				else{
					res.json(user);
					console.log('Created: ' + user);
				}
			})
		}
	}
})();