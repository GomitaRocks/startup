requirejs (['routes'], function(routes){

	
	$(document).ready(function(){
		$('#search-comic').hide();
		$('#search-character').hide();
		var router = new routes();
		Backbone.history.start();
		$('#search-comic').keyup(function(){
			console.log($('#search-comic').val());
			router.comicsSearch($('#search-comic').val(), 20, 1);

		});

		$('#search-character').keyup(function(){
			console.log($('#search-character').val());
			router.charactersSearch($('#search-character').val(), 20, 1);

		});



	});
})