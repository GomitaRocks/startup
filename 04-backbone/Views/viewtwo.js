define (["Views/viewone.js"], function(movieView){
	var moviesView = Backbone.View.extend({

		render: function(){
			var self = this;
			self.$el.html('');
			this.model.each(function(moviesModel){
				var movie = new movieView({ model: moviesModel });
				self.$el.append(movie.render().$el);
			});

			$(".edit-table").hide();
			$(".add-table").show();
			$(".buttons").remove();
			$(".back-button").hide();
		},
		initialize: function(){
			this.model.on("add", this.render, this);
			this.model.on("remove", this.render, this);
		}
	});
	return moviesView;
});