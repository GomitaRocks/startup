define ([], function(){
	
	var movieView = Backbone.View.extend({
	render: function(){
		this.$el.html("hola");

		return this;
	}
	});
	return movieView;
});



