define(function(){
	return Backbone.View.extend({
		initialize: function() {
			this.template = _.template($('#hello-template').html());
			this.listenTo(this.model, 'change', this.render);
		},

		render: function(){
			console.log(this.model.attributes);
			this.$el.html(this.template(this.model.attributes));
		}
	})
})