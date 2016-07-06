import Ember from 'ember';

export default Ember.Route.extend({
	// data from the service
		data: Ember.inject.service('issue-manager'),

// the model only needs to conatin the number of open issues
	model() {
		return this.get('data').model().then(function(results) {
			var openIssues = 0;
			results.data.forEach(function(issue) {
				if (issue.status === 'open') {
					openIssues += 1;
				}
			})
			return {openIssues: openIssues};
		});

	}
});

