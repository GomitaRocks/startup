define(function(require){
	var comicModel = require('models/ComicModel');
	return Backbone.Collection.extend({
	    model: comicModel,
	    url: 'http://gateway.marvel.com:80/v1/public/comics'
	});
})