import Ember from 'ember';

export default Ember.Route.extend({

	model() {

		return [];//return an empty array as an initializing model

	},

	afterModel() {
		var that = this; //to get right scope of this

		var renderModel = function() {

			Ember.$.get('/siteLoc.json').then(function(loc){
				if (!_.isEqual(that.loc, loc)) { //check if the current model is NOT the same as the new model
					that.render({model: loc}); //render the page with the new model
					that.loc = loc; //set the that.loc to the new model
				}

			});
		}

		renderModel(); //run the renderModel once to get the initial locations on the map

		(function poll() {
			setTimeout(function() {
				renderModel();
				poll(); //run the poll function again in a continous loop
			}, 3000);
		}) (); //run the function, when it is initialized the first time


	}



});
