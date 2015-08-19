import $ from 'jquery';
import Backbone from 'backbone';

import HomeView from '../views/home';
import AddView from '../views/add';
import Person from '../models/person';

let Router = Backbone.Router.extend({
   routes: {
     '': 'home',
     'add': 'addPerson'
   },

   initialize(args) {
     this.collection = args.collection;
   },

   home() {
     new HomeView({collection: this.collection});
   },

   addPerson() {
     new AddView({collection: this.collection});
   }

});

export default Router;
