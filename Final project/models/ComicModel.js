define(function(){
	return Backbone.Model.extend({
		urlRoot: 'http://gateway.marvel.com:80/v1/public/comics',
		url: function(){
			return this.urlRoot + '/' + this.id;
		}
	});
});