define (["Views/viewone.js"], function(movieView){
	var moviesView = Backbone.View.extend({

	render: function(){
		var self = this;
		
		this.model.each(function(moviesView){
			var movie = new movieView({ model: moviesView });
			self.$el.append(movie.render().$el);
			});
		},
		initialize: function(){
			this.model.on("add", this.render, this);
		}
	});
	return moviesView;
});