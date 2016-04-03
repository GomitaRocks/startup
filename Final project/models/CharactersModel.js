define(function(){
	return Backbone.Model.extend({
	    url: 'http://gateway.marvel.com:80/v1/public/characters'
	});
})