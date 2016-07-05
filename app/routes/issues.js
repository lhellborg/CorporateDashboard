import Ember from 'ember';


export default Ember.Route.extend({

	model: function() {
		var p = new Promise(function(resolve) {
			Papa.parse('/issueItems.csv', {
				download:true,
				header:true,
				complete:function(results) {
					console.log(results);
					resolve(results);
				}
			});
		});
		return p;
	}

});
