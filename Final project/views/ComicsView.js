define(function(){
	return Backbone.View.extend({
		name: '',

		addName: function(name){
			console.log(name);
			this.name = name;
		},

		initialize: function() {
			this.template = Handlebars.compile($("#comics-template").html());
			this.listenTo(this.model, 'change', this.render);
			
		},

		render: function(){
			var page = this.model.attributes.data.offset/this.model.attributes.data.limit+1;
			this.model.attributes.data.prev = page-1;
			this.model.attributes.data.next = page+1;
			$('#search-comic').show();
			$('#search').show();
			$('#search-character').hide();
			$('body').css('background-image', 'none');
			$('body').css('background-color', 'black');
			if( typeof this.name != 'undefined' ){
				this.model.attributes.data.name = this.name;
			}
			this.$el.html(this.template(this.model.attributes.data));
		}
	})
})