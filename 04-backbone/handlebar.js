$(document).ready(function(){

/*	var source = $("#first-template").html();
	var template = Handlebars.compile(source);

	var context = {
		title: "All about Handlebars",
		body: "<p>This is a post about &lt;p&gt; tags</p>"
	}

	var el_html = template(context);

	$("#render_here").html(el_html);
	$("#render_here_again").html(el_html);*/

	var source	= $(".post").html();
	var template = Handlebars.compile(source);

	var context	= {
		author: {
			firstName: "Jennifer",
			lastName: "Posso"
		},
		body: "Cool Handlebars",
		comments: [{
			author: {
				firstName: "Diego",
				lastName: "Cardona"
			},
			body: "Here is the 1st comment"
		},		{
			author: {
				firstName: "Ana",
				lastName: "Cardona",
			},
			body: "Here is the 2st comment"
		}]
	};

	Handlebars.registerHelper("fullName", function(person) {
		return person.firstName + " " + person.lastName;
	});

	var html = template(context);

	$(".post").html(html);


	var ctx = {
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
	$("#selections").html(el_html);











});