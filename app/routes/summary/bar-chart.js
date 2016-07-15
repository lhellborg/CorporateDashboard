import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		var that = this; //to get right scope of this

		(function poll() {
			setTimeout(function() {
				that.refresh(); //re-querying the server for the latest information using the same parameters as when the route was first entered
			}, 3000);
		}) (); //run the function, when it is initialized the first time


		return Ember.$.get('/assets/data/issuesTime.json');


	}

});
