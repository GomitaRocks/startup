define(function(){
	return Backbone.View.extend({
		initialize: function() {
			this.template = Handlebars.compile($("#index-template").html());
		},

		render: function(){
			$('body').css('background-image', 'url("images/fondo.jpg")');
			$('body').css('background-repeat', 'no-repeat');
			$('body').css('background-size', '100%');
				
			$('#search-character').hide();
			$('#search').hide();
			$('#search-comic').hide();
			this.$el.html(this.template());
		}
	})
})