var mongoose = require('mongoose'); 
//name password created_by content theme 
var ThreadSchema = new mongoose.Schema({
	name: String,
	password: String, 
	created_by: String,
	content: String, 
	theme: String
});

module.exports = mongoose.model('Thread', ThreadSchema); 