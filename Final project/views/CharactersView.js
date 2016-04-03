define(function(){
	return Backbone.View.extend({
		initialize: function() {
			this.template = Handlebars.compile($("#characters-template").html());
			this.listenTo(this.model, 'change', this.render);
		},

		render: function(){
			console.log(this.model);
			this.$el.html(this.template(this.model.attributes.data));
		}
	})
})