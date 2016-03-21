
/*Write one Handlebars template to show the details of a movie 
(name, year, description or plot, genre, etc). Use imdb or Netflix for inspiration.*/

/*$(document).ready(function(){

	var source = $("#first-template").html();
	var template = Handlebars.compile(source);

	var context = {
		title:"La serie Divergente Leal - 1ª parte",
		year: "2016",
		genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
		description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
		director: "Robert Schwentke",
		stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
		img:"<img src='http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg'>"
	
	}

	var el_html = template(context);

	$("#render_here").html(el_html);
	
*/

/*Create a second template to render a list of movies.*/
/*

	var source	= $(".movies").html();
	var template = Handlebars.compile(source);

	var context	= {
		newMovies: [{
		title:"La serie Divergente Leal - 1ª parte",
		year: "2016",
		genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
		description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
		director: "Robert Schwentke",
		stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
		img:"<img src='http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg'>"
			},
		{
		title:"La serie Divergente Leal - 1ª parte",
		year: "2016",
		genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
		description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
		director: "Robert Schwentke",
		stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
		img:"<img src='http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg'>"
			},
		{
		title:"La serie Divergente Leal - 1ª parte",
		year: "2016",
		genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
		description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
		director: "Robert Schwentke",
		stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
		img:"<img src='http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg'>"
			},
		{
		title:"La serie Divergente Leal - 1ª parte",
		year: "2016",
		genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
		description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
		director: "Robert Schwentke",
		stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
		img:"<img src='http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg'>"
			}
		]
	};

	Handlebars.registerHelper("fullName", function(person) {
		return person.firstName + " " + person.lastName;
	});

	var html = template(context);

	$(".movies").html(html);

*/

/*Vista backbone*/

requirejs (["Views/viewone.js"], function(movieView){
	var movieView = new movieView({ el: "#render_here"});
	movieView.render();
});

/*var movieView = Backbone.View.extend({
	render: function(){
		this.$el.html("hola");

		return this;
	}
});

var movieView = new movieView({ el: "#render_here"});
movieView.render();
*/





/*Using Backbone, create a movie listing with your favorite movies. Data shall be persisted in localhost.*/


	var movieModel = Backbone.Model.extend({
		default: {
			title:"",
			year: "",
			genre: "",
			description: "",
			director: "",
			stars:"",
			img:""
		}
	});

	var moviesCollection = Backbone.Collection.extend({
		model: movieModel
	});

	var terminator = new movieModel({
		title:"La serie Divergente Leal - 1ª parte",
		year: "2016",
		genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
		description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
		director: "Robert Schwentke",
		stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
		img:"<img src='http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg'>"
			});
	var rambo = new movieModel({
		title:"La serie Divergente Leal - 1ª parte",
		year: "2016",
		genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
		description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
		director: "Robert Schwentke",
		stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
		img:"<img src='http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg'>"
			});
	var rocky = new movieModel({
		title:"La serie Divergente Leal - 1ª parte",
		year: "2016",
		genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
		description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
		director: "Robert Schwentke",
		stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
		img:"<img src='http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg'>"
			});
	var simcity = new movieModel({
		title:"La serie Divergente Leal - 1ª parte",
		year: "2016",
		genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
		description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
		director: "Robert Schwentke",
		stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
		img:"<img src='http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg'>"
			});
	var batman = new movieModel({
		title:"La serie Divergente Leal - 1ª parte",
		year: "2016",
		genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
		description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
		director: "Robert Schwentke",
		stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
		img:"<img src='http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg'>"
			});


	var moviesList = new moviesCollection([terminator, rambo, rocky, simcity, batman]);



/*	var ctx = {
		headers: [{
			id: 1, items: "one"
		}, {
			id: 2, items: "two"
		}, {
			id: 3, items: "three"
		}, {
			id: 4, items: "four"
		}]
	};

	var source = $("#selections").html();
	var template = Handlebars.compile(source);
	var el_html = template(ctx);
	$("#selections").html(el_html);*/

/*});*/