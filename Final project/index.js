requirejs (['views/ComicView.js', 'models/ComicModel', 'models/ComicsModel',
'views/ComicsView', 'routes'], function(comicView, comicModel, comicsModel, comicsView, routes){
	
	$(document).ready(function(){

		new routes();
		Backbone.history.start();


	});
})