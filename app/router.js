import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashBoard');
  this.route('location');
  this.route('summary');
  this.route('issues');
});

export default Router;
