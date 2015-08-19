import Backbone from 'backbone';

// Create a Model
let Person = Backbone.Model.extend({

  idAttribute: 'objectId'

});

export default Person;
