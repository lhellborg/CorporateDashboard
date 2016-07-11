import Ember from 'ember';

export default Ember.Route.extend({

	model() {

		var that = this; //to get right scope of this in the promise function
		(function poll() {
			setTimeout(function() {
				Ember.$.get('/siteLoc.json').then(function(m) {
					that.set('model', m);
					poll(); //run the poll function again after the model is set
				});
			}, 30000);
		}) (); //run the function, when it is initialized the first time


		return Ember.$.get('/siteLoc.json');

	}



});
