define ([], function(){

	var movieView = Backbone.View.extend({
		
		render: function(){
			var template = Handlebars.compile( $("#first-template").html() );
			var el_html = template(this.model.toJSON());
			

			this.$el.html(el_html);
			return this;
		},
		events: {
			"click .detail": "click"
		},
		click: function(){
			this.$el = $("#render_here");
			this.render();
		}
	});
	return movieView;
});



