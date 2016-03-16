Handlebars.registerHelper('list', function(items, options) {
  var out = "<ul>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ul>";
});

var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

var context = {
  movies: [
    {Name: "Yehuda", Year: "Katz", Description: "lalalalalalalalala"},
    {Name: "Carl", Year: "Lerche", Description: "lalalalalalalalala"},
    {Name: "Alan", Year: "Johnson", Description: "lalalalalalalalala"}
  ]
};

var html = template(context);

$("#render_here").html(html);	


