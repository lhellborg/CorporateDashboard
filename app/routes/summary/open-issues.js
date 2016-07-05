import Ember from 'ember';


export default Ember.Route.extend({
	data: Ember.inject.service('issue-manager'),

	model() {
		return this.get('data').model();
	},

	actions: {
		count(data) {
			var openIssues = 0;
			data.forEach(function(issue) {
				if (issue.status === 'open') {
					openIssues += 1;

				}
			})
			console.log(openIssues);
		}

	}



});
