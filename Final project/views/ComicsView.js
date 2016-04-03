define(function(){
	return Backbone.View.extend({
		initialize: function() {
			this.template = Handlebars.compile($("#comics-template").html());
			this.listenTo(this.model, 'change', this.render);
		},

		render: function(){
			this.$el.html(this.template(this.model.attributes.data.results[0]));
		}
	})
})