import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashBoard');
  this.route('location', {path: "location"});
  this.route('summary', function() {
    this.route('lineChart');
    this.route('barChart');
  });
  this.route('issues');
});

export default Router;
