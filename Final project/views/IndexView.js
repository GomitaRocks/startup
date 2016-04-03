define(function(){
	return Backbone.View.extend({
		initialize: function() {
			this.template = Handlebars.compile($("#index-template").html());
		},

		render: function(){
			this.$el.html(this.template());
		}
	})
})