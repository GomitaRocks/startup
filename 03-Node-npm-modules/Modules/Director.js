module.exports = function(name) {
		this.set = function (attr, value) {
			this[attr] = value;
		};

		this.get = function (attr) {
			return this[attr];
		};
		this.name = name;
		this.quotes = [];
		this.speak = function () {
			var phrase = this.name + " says: '"  +  this.quotes +  " ' ";
			console.log(phrase);
		};

};

