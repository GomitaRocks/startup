$(document).ready(function(){

	$('.section').fadeIn(5000, 'linear', function(){
		//console.dir($(".alias"))
		$('.alias').focus();
	});

	$('#button').click(function(){
		$.get( 'http://www.w3schools.com/jquery/eff_fadein.asp', function( data ) {
			$('section').html( data );
		})
		.fail(function() {
			$('.section').css( 'color', 'red' );
		})
	});
	

	$('#search').keyup(function(e){
   		$.ajax({
			method: 'GET',
			url: 'https://api.spotify.com/v1/search',
			data: { q: $('#search').val(), type: 'album' }
		})

		.done(function( data ) {
			$('#albums').html('');
			$.each( data.albums.items, function( key, value ) {
				html = "<article class='wrap'><div class='img'> <img src='"+value.images[0].url+"'><div class='type'>"+value.type+"</div><div class='name'>"+value.name+"</div></div><div class='url'><a href='"+value.external_urls.spotify+"'>Spotify direction</a></div></article>";
				$('#albums').append(html);
				console.log( value.name );
			});

			console.log(data.albums.items);
		});
	});
});

