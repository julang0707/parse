import Person from '../models/person';
import Backbone from 'backbone';

// Create a Collection
let People = Backbone.Collection.extend({

  model: Person,

  url: 'https://api.parse.com/1/classes/person',

  parse: function (response) {
    return response.results;
  }

});

export default People;
