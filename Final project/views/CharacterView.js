define(function(){
	return Backbone.View.extend({
		initialize: function() {
			Handlebars.registerHelper('if', function (conditional, options) {
			if(options.hash.value == conditional) {
			    return options.fn(this)
			  } else {
			    return options.inverse(this);
			  }
			});
			this.template = Handlebars.compile($("#character-template").html());
			this.listenTo(this.model, 'change', this.render);
		},

		render: function(){
			$('#search-comic').hide();
			$('#search-character').hide();
			this.$el.html(this.template(this.model.attributes.data.results[0]));
		}
	})
})