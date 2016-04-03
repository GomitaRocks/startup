define(function(require){
	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'comics/:quantity/:page': 'comics',
			'comics/:name/:quantity/:page': 'comicsSearch',			
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

		comicsSearch: function(name, quantity, page){
			var timeStamp = this.ts;
			var hash = md5(timeStamp+this.privateKey+this.publicKey);
			var limit = quantity;
			var offset = (page-1)*quantity;
			var comicsModel = require('models/ComicsModel');
			var models = new comicsModel();
			models.fetch({ data: $.param({ title: name, limit: limit, offset: offset, apikey: this.publicKey, ts: timeStamp, hash: hash}),
				succes:function(){
					this.attributes.data.name = name;
				}
			 });
			
			var comicsView = require('views/ComicsView');
			var comics = new comicsView({
				el: $('#comic'),
				model:models
			});

			comics.render();
		},

		comics: function(quantity,page){
			var timeStamp = this.ts;
			var hash = md5(timeStamp+this.privateKey+this.publicKey);
			var limit = quantity;
			var offset = (page-1)*quantity;
			var comicsModel = require('models/ComicsModel');
			var models = new comicsModel();
			models.fetch({ data: $.param({ limit: limit, offset: offset, apikey: this.publicKey, ts: timeStamp, hash: hash}) });
			var comicsView = require('views/ComicsView');
			var comics = new comicsView({
				el: $('#comic'),
				model:models
			});

			comics.render();
		},

		characters: function(){
			var timeStamp = this.ts;
			var hash = md5(timeStamp+this.privateKey+this.publicKey);
			var charactersModel = require('models/CharactersModel');
			var models = new charactersModel();
			models.fetch({ data: $.param({ apikey: this.publicKey, ts: timeStamp, hash: hash}) });
			var charactersView = require('views/CharactersView');
			var characters = new charactersView({
				el: $('#comic'),
				model:models
			});

			characters.render();
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

		character: function(id){
			var timeStamp = this.ts;
			var hash = md5(timeStamp+this.privateKey+this.publicKey);
			var characterModel = require('models/CharacterModel');
			var models = new characterModel({'id':id});
			models.fetch({ data: $.param({ apikey: this.publicKey, ts: timeStamp, hash: hash}) });
			var characterView = require('views/CharacterView');
			var character = new characterView({
				el: $('#comic'),
				model:models
			});

			character.render();
		}


	});
});