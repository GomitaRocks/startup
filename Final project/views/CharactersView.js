define(function(){
	return Backbone.View.extend({
		initialize: function() {
			this.template = Handlebars.compile($("#characters-template").html());
			this.listenTo(this.model, 'change', this.render);
		},

		render: function(){
			$('body').css('background-image', 'none');
			$('body').css('background-color', 'black');
			this.$el.html(this.template(this.model.attributes.data));
		}
	})
})