var mongoose = require('mongoose');
var Schema = mongoose.Schema
var commentSchema = new mongoose.Schema({
	_post: {type: Schema.Types.ObjectId, ref: 'post'},
	user: String,
	description: String
});

mongoose.model('comment', commentSchema)
