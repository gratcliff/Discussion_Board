var mongoose = require('mongoose');
var Schema = mongoose.Schema
var topicSchema = new mongoose.Schema({
	category: String,
	description: String,
	topic: String,
	user: String,
	posts: [{type: Schema.Types.ObjectId, ref: 'post'}]
});

mongoose.model('topic', topicSchema)