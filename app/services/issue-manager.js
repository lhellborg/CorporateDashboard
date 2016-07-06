import Ember from 'ember';

export default Ember.Service.extend({

 // a model build on promise to parse a csv file with Papa.parse in an asynchronous way
 // made in a service function since both summary window and the issues window needs the same data
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
	}


});
