var Movie = require("./Modules/Movie.js");
var Director = require("./Modules/Director.js");
var $ = require("./Modules/Jquery.js")

var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);

alien.set('director', ridleyScott);
alien.get('director').speak(); 


$('.director').append(alien.get('director').get('name'));
$('.quotes').append(alien.get('director').get('quotes'));
