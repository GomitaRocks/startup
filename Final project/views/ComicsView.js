define(function(){
	return Backbone.View.extend({
		initialize: function() {
			this.template = Handlebars.compile($("#comics-template").html());
			this.listenTo(this.model, 'change', this.render);
			
		},

		render: function(){
			$('#search-comic').show();
			$('body').css('background-image', 'none');
			$('body').css('background-color', 'black');
			var page = this.model.attributes.data.offset/this.model.attributes.data.limit+1;
			this.model.attributes.data.prev = page-1;
			this.model.attributes.data.next = page+1;
			console.log(this.model);
			this.$el.html(this.template(this.model.attributes.data));
		}
	})
})