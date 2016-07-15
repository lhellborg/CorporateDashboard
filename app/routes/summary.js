import Ember from 'ember';

export default Ember.Route.extend({
	// data from the service
		data: Ember.inject.service('issue-manager'),

// the model only needs to contain the number of open issues
	model() {

		var that = this; //to get right scope of this
		(function poll() {
			setTimeout(function() {
				that.refresh();//re-querying the server for the latest information using the same parameters as when the route was first entered
			}, 3000);
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

