var Movie = function() {
	this.title = '';
	this.hashmap = '';
	this.play = function() {
		listener = new MovieObserver();
		listener.playing(this.title);
	};
	this.stop = function() {
		listener = new MovieObserver();
		listener.stopped(this.title);
	};
	this.set = function(attr, value) {
		this[attr] = value;
	};
	this.get = function(attr) {
		return this[attr];
	};
}