import Ember from 'ember';

export default Ember.Route.extend({
	// data from the service
		data: Ember.inject.service('issue-manager'),

// the model only needs to contain the number of open issues
	model() {

		var that = this; //to get right scope of this in the promise function

		(function poll() {
			setTimeout(function() {
				that.get('data').model().then(function(results) {
					that.set('model', that.calcOpenIssues(results));
					poll(); //run the function again
				});
			}, 30000);
		}) (); //run the function, when it is initialized the first time



		return this.get('data').model().then(this.calcOpenIssues);

	},

	calcOpenIssues: function(results) {
			var openIssues = 0;
			results.data.forEach(function(issue) {
				if (issue.status === 'open') {
					openIssues += 1;
				}
			});
			return {openIssues: openIssues};
		}
});

