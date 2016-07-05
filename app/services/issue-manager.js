import Ember from 'ember';

export default Ember.Service.extend({

	model: function() {
		var p = new Promise(function(resolve) {
			Papa.parse('/issueItems.csv', {
				download:true,
				header:true,
				complete:function(results) {
					resolve(results);
				}
			});
		});
		return p;
	},

	 countOpen: function() {
	 	console.log('counting');
	 }

});
