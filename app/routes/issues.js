import Ember from 'ember';


export default Ember.Route.extend({
	data: Ember.inject.service('issue-manager'),

	model() {

		var that = this; //to get right scope of this in the promise function
		(function poll() {
			setTimeout(function() {
				that.get('data').model().then(function(m) {
					that.set('model', m);
					poll(); //require the function again after the model is set
				});
			}, 30000);
		}) (); //run the function, when it is initialized the first time

		return this.get('data').model();
	}

});
