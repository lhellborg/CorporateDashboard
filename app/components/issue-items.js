import Ember from 'ember';


export default Ember.Component.extend({

//save the model in originalModel on initation
  	init: function() {
  		this._super(...arguments);
  		this.originalModel = this.get("model");
  	},


// sorting ascending order in the model by the attribute key
	sortByAsc: function(attribute) {
		var items = this.originalModel;
		items = _.sortBy(items, function(item) {
			return item[attribute];
		});
		this.set("model", items);
	},

	// sorting strings in descending order in the model by the attribute key
	sortByDescString: function(attribute) {
		var items = this.originalModel;
		items = _.sortBy(items, function(item) {
			return item[attribute].charCodeAt() * -1;
		});
		this.set("model", items);
	},

		// sorting dates in descending order in the model by the attribute key
	sortByDescNum: function(attribute) {
		var items = this.originalModel;
		items = _.sortBy(items, function(item) {
			if (item[attribute] !== "") {
				var dt = new Date(item[attribute]);
				return -dt;
			} else {
				return new Date(0);
			}

		});
		this.set("model", items);
	},

	// variable to toggle so the sorting varies from ascending to descending
 	ascending: false,

	actions: {
		sortBySubDate: function() {
			if (this.ascending) {
				this.sortByAsc('subDate');
			} else {
				this.sortByDescNum('subDate');
			}
			this.toggleProperty('ascending');
		},
		sortByName: function() {
			if (this.ascending) {
				this.sortByAsc('name');
			} else {
				this.sortByDescString('name');
			}
			this.toggleProperty('ascending');
		},
		sortByEmail: function() {
			if (this.ascending) {
				this.sortByAsc('email');
			} else {
				this.sortByDescString('email');
			}
			this.toggleProperty('ascending');
		},
		sortByDesc: function() {
			if (this.ascending) {
				this.sortByAsc('desc');
			} else {
				this.sortByDescString('desc');
			}
			this.toggleProperty('ascending');
		},
		sortByStatus: function() {
			if (this.ascending) {
				this.sortByAsc('status');
			} else {
				this.sortByDescString('status');
			}
			this.toggleProperty('ascending');
		},
		sortByClose: function() {
			if (this.ascending) {
				this.sortByAsc('closeDate');
			} else {
				this.sortByDescNum('closeDate');
			}
			this.toggleProperty('ascending');
		},
		sortByEmpl: function() {
			if (this.ascending) {
				this.sortByAsc('employee');
			} else {
				this.sortByDescString('employee');
			}
			this.toggleProperty('ascending');
		},

		filter: function(filterName) {
			if (filterName === "") {
				this.set("model", this.originalModel); //if nothing is typed in filter the table should show all records
			} else {
				filterName = filterName.toLowerCase();
				var items = this.originalModel;
				items = _.filter(items, function(item) { //looks through each row in the table and add the ones that pass thru the test
					var values = _.values(item); //return values of objects own property => the values in a row, into an array
					return _.find(values, function(value) { //looks through the values of the list and returns when it pass thru the test, since the whole row needs to be returned not all values in the row has to be tested
						var findMe = value.toLowerCase().indexOf(filterName); //if the value match any characters entered into the filterName it will be returned
						return findMe >= 0;
					});
				});
				this.set("model", items); //the model will be changed accordingly
			}
		}
	}
});
