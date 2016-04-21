var mongoose = require('mongoose');
var Schema = mongoose.Schema
var postSchema = new mongoose.Schema({
	user: String,
	upvote: Number,
	downvote: Number,
	description: String,
	_topic: {type: Schema.Types.ObjectId, ref: 'topic'},
	comments: [{type: Schema.Types.ObjectId, ref: 'comment'}]
});

mongoose.model('post', postSchema)