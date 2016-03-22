define ([]), function(){
	var MoviesAddView = Backbone.View.extend({
		model: new Movie(),
		tagName: "tr",
		initialize: function(){
			this.template = _.template($(".movie-list-template").html())
		},
		render: function(){
			this.$el.html(this.template({model: this.model.JSON()}))
		}
	});
}