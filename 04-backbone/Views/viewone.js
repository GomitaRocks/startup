define ([], function(){

	var movieView = Backbone.View.extend({

		initialize: function(){
			this.model.on("change", this.click, this);
		},

		render: function(){
			var template = Handlebars.compile($("#first-template").html());
			var el_html = template(this.model.toJSON());
			

			this.$el.html(el_html);
			return this;
		},

			events: {
			"click .edit-movie": "edit",
			"click .detail": "click",
			"click .edit-button": "show",	
			"click .delete-button": "delete"	
		},

		click: function(){
			$("#render_here").html('');
			movie = new movieView({el:"#render_here", model:this.model});
			movie.render();
			$(".back-button").show();
			$(".add-table").hide();
			$(".edit-table").hide();
			$(".buttons").show();
			$(".director-edit").val(this.model.get("director"));
			$(".title-edit").val(this.model.get("title"));
			$(".year-edit").val(this.model.get("year"));
			$(".img-edit").val(this.model.get("img"));
			$(".genre-edit").val(this.model.get("genre"));
			$(".duration-edit").val(this.model.get("duration"));
			$(".description-edit").val(this.model.get("description"));
			$(".stars-edit").val(this.model.get("stars"));
		},

		edit: function(){
			this.model.set("director", $(".director-edit").val());	
			this.model.set("title", $(".title-edit").val());	
			this.model.set("year", $(".year-edit").val());	
			this.model.set("img", $(".img-edit").val());	
			this.model.set("genre", $(".genre-edit").val());	
			this.model.set("duration", $(".duration-edit").val());	
			this.model.set("stars", $(".stars-edit").val());	
		},

		show: function(){
			$(".edit-table").toggle(1000);
		},

		delete: function(){
			this.model.destroy();
		}

	});
	return movieView;
});



