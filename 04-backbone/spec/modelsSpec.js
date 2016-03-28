describe("model suite", function(){
	describe("movie model spec", function(){
		it("Save and read model information", function(){
			var Gata = new movieModel({
				title:"Fury Asesina por naturaleza 2a parte",
				year: "2016",
				genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
				description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
				director: "Robert Schwentke",
				stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
				img:"http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg"
			});
			expect(Gata.get("title")).toEqual("Fury Asesina por naturaleza 2a parte");
		});
	});
	describe("movies model spec", function(){
		it("Save and read model information", function(){
			var Gata = new movieModel({
				title:"Fury Asesina por naturaleza 2a parte",
				year: "2016",
				genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
				description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
				director: "Robert Schwentke",
				stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
				img:"http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg"
			});
			var terminator = new movieModel({
				title:"terminator - 1ª parte",
				year: "2016",
				genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
				description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
				director: "Robert Schwentke",
				stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
				img:"http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg"
					});
			var rambo = new movieModel({
				title:"Rambo - 1ª parte",
				year: "2016",
				genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
				description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
				director: "Robert Schwentke",
				stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
				img:"http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg"
					});
			var rocky = new movieModel({
				title:"Rocky - 1ª parte",
				year: "2016",
				genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
				description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
				director: "Robert Schwentke",
				stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
				img:"http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg"
					});
			var simcity = new movieModel({
				title:"Sim City - 1ª parte",
				year: "2016",
				genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
				description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
				director: "Robert Schwentke",
				stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
				img:"http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg"
					});
			var batman = new movieModel({
				title:"Batman - 1ª parte",
				year: "2016",
				genre: "Action | Adventure | Mystery | Sci-Fi | Thriller",
				description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago to finally discover the shocking truth of what lies behind it.",
				director: "Robert Schwentke",
				stars:" Shailene Woodley, Theo James, Jeff Daniels, Naomi Watts",
				img:"http:\/\/ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_UX182_CR0,0,182,268_AL_.jpg"
					});
			var moviesTest = new moviesCollection([Gata, terminator, rambo, rocky, simcity, batman]);
			moviesTest.each(function(movie){
				expect(movie.get("title")).not.toEqual("");
				expect(movie.get("title")).not.toBeNull();
				expect(movie.get("title")).toBeDefined();
				
			});
		});
	});
});


	