import Ember from 'ember';


export default Ember.Route.extend({
	data: Ember.inject.service('issue-manager'),

	model() {
		return this.get('data').model();
	}

});
