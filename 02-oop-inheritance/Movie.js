var Movie = function() {
	var module = {
		title: '',
		hashmap: '',
		play: function() {
			listener = new MovieObserver();
			listener.playing(this.title);
		},
		stop: function() {
			listener = new MovieObserver();
			listener.stopped(this.title);
		},
		set: function(attr, value) {
			this[attr] = value;
		},
		get: function(attr) {
			return this[attr];
		}
	};

	var MovieObserver = function() {
		this.playing = function(title) {
			console.log("playing " + title);
		};
		this.stopped = function(title) {
			console.log("stopped " + title);
		};
	};

	return module;
}
