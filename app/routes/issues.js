import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [
		{
			subDate: "2012-04-23T18:25:43.511Z",
			name: "John",
			email: "john2@dsf",
			desc: "some description",
			status: "closed",
			closeDate: "2012-05-23T18:25:43.511Z",
			employee: "Anna"
		},
		{
			subDate: "2013-04-23T18:25:43.511Z",
			name: "Frank",
			email: "frank@dsf",
			desc: "other description",
			status: "open",
			closeDate: "2013-05-23T18:25:43.511Z",
			employee: "Anna"
		},
		{
			subDate: "2013-06-23T18:25:43.511Z",
			name: "Bo",
			email: "bo@dsf",
			desc: "any description",
			status: "open",
			closeDate: "2013-08-23T18:25:43.511Z",
			employee: "Elias"
		}
		];
	}
});
