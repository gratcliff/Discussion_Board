var users = require('./../controllers/users.js');
var topics = require('./../controllers/topics.js');
var posts = require('./../controllers/posts.js');
var comments = require('./../controllers/comments.js');
module.exports = function (app){
	app.get('/users', function (req, res){
		users.index(req, res);
	})
	app.post('/users', function (req, res){
		users.create (req, res);
	})
	app.get('/topics', function (req, res){
		topics.index(req, res);
	})
	app.get('/topic/:id', function (req, res){
		topics.getOne(req, res);
	})
	app.post('/topics', function (req, res){
		topics.create (req, res);
	})
	app.get('/posts/:id', function (req, res){
		posts.index (req, res);
	})
	app.post('/posts', function (req, res){
		posts.create (req, res);
	})
	app.get('/comments/:id', function (req, res){
		comments.index (req, res);
	})
	app.post('/comments', function (req, res){
		comments.create (req, res);
	})
}