requirejs (['views/ComicView.js', 'models/ComicModel', 'models/ComicsModel',
'views/ComicsView', 'routes'], function(comicView, comicModel, comicsModel, comicsView, routes){
	
/*	var ts = Math.round((new Date()).getTime() / 1000);
	var privateKey = '88673eec12eca090532fd36382109dc3d4ecb9ef';
	var publicKey = '195d656c89bfa47d2dacc2d74f44135d';
	var hash = md5(ts+privateKey+publicKey);*/
	
	$(document).ready(function(){
		var router = new routes();
		Backbone.history.start();
		$('#search-comic').keyup(function(){
			
			router.comicsSearch($('#search-comic').val(), 20, 1);

		});



	});
})