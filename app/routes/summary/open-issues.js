import Ember from 'ember';


export default Ember.Route.extend({
	data: Ember.inject.service('issue-manager'),

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
