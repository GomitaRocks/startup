define(function(require){
	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'comics': 'comics',
			'characters': 'characters',
			'comics/:id': 'comic',
			'characters/:id': 'character'
		},

		ts: Math.round((new Date()).getTime() / 1000),

		privateKey: '88673eec12eca090532fd36382109dc3d4ecb9ef',

		publicKey: '195d656c89bfa47d2dacc2d74f44135d',

		index: function(){
			var indexView = require('views/IndexView');
			var index = new indexView({
				'el': $('#comic')
			});

			index.render();
		},

		comics: function(){
			var timeStamp = this.ts;
			var hash = md5(timeStamp+this.privateKey+this.publicKey);
			var comicsModel = require('models/ComicsModel');
			var models = new comicsModel();
			models.fetch({ data: $.param({ apikey: this.publicKey, ts: timeStamp, hash: hash}) });
			var comicsView = require('views/ComicsView');
			var comics = new comicsView({
				el: $('#comic'),
				model:models
			});

			comics.render();
		},

		characters: function(){

		},

		comic: function(id){
			var timeStamp = this.ts;
			var hash = md5(timeStamp+this.privateKey+this.publicKey);
			var comicModel = require('models/ComicModel');
			var models = new comicModel({'id':id});
			models.fetch({ data: $.param({ apikey: this.publicKey, ts: timeStamp, hash: hash}) });
			var comicView = require('views/ComicView');
			var comic = new comicView({
				el: $('#comic'),
				model:models
			});

			comic.render();
		},

		character: function(){

		}


	});
});