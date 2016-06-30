import Ember from 'ember';

export default Ember.Component.extend({

//save original model on initation
  	init: function() {
  		this._super(...arguments);
  		this.originalModel = this.get("model");
  	},

// sorting in the table
	sortBy: function(attribute) {
		var items = this.originalModel;
		items = _.sortBy(items, function(item) {
			return item[attribute];
		});
		this.set("model", items);
	},

	actions: {
		sortBySubDate: function() {
			this.sortBy('subDate');
		},
		sortByName: function() {
			this.sortBy('name');
		},
		sortByEmail: function() {
			this.sortBy('email');
		},
		sortByDesc: function() {
			this.sortBy('desc');
		},
		sortByStatus: function() {
			this.sortBy('status');
		},
		sortByClose: function() {
			this.sortBy('closeDate');
		},
		sortByEmpl: function() {
			this.sortBy('employee');
		},

		filter: function(filterName) {
			if (filterName === "") {
				this.set("model", this.originalModel);
			} else {
				filterName = filterName.toLowerCase();
				var items = this.originalModel;
				items = _.filter(items, function(item) {
					var values = _.values(item);
					return _.find(values, function(value) {
						var findMe = value.toLowerCase().indexOf(filterName);
						return findMe >= 0;
					});
				});
				this.set("model", items);
			}
		}
	}
});
