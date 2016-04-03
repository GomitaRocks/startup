requirejs (['views/ComicView.js', 'models/ComicModel', 'models/ComicsModel',
'views/ComicsView'], function(comicView, comicModel, comicsModel, comicsView){
	
	var ts = Math.round((new Date()).getTime() / 1000);
	var privateKey = '88673eec12eca090532fd36382109dc3d4ecb9ef';
	var publicKey = '195d656c89bfa47d2dacc2d74f44135d';
	var hash = md5(ts+privateKey+publicKey);

	var model = new comicModel({ id: document.location.search.slice(1) });
	models = new comicsModel();

	models.fetch({ data: $.param({ apikey: publicKey, ts: ts, hash: hash}) });
	console.log(models.attributes);

	model.fetch({ data: $.param({ apikey: publicKey, ts: ts, hash: hash}) });
	
	$(document).ready(function(){
		var comic = new comicView({
			el: $('#comic'),
			model:model
		});
		comic.render();

		var comics = new comicsView({
			el: $('#comic'),
			model:models
		});
		comics.render();
	});
})