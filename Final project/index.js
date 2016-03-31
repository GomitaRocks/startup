requirejs (['views/ComicView.js', 'models/ComicModel'], function(comicView, comicModel){
	
	var model = new comicModel({ id: document.location.search.slice(1) });
	model.fetch();
	
	$(document).ready(function(){
		var hello = new comicView({
			el: $('#hello'),
			model:model
		});
		hello.render();
	});
})