requirejs (['routes'], function(routes){

	
	$(document).ready(function(){
		$('#search-comic').hide();
		var router = new routes();
		Backbone.history.start();
		$('#search-comic').keyup(function(){
			
			router.comicsSearch($('#search-comic').val(), 20, 1);

		});



	});
})