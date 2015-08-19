import $ from 'jquery';
import Backbone from 'backbone';
import {_} from 'underscore';

import Person from '../models/person';

let html = `
  <form id="addForm">
    <input type="text" class="name" placeholder="Your Name"/>
    <input type="text" class="age" placeholder="Your Age"/>
    <button>Add User</button>
  </form>
`;

let AddView = Backbone.View.extend({

  className: 'add-page',

  template: _.template(html),

  events: {
    'submit #addForm': 'addNewPerson'
  },

  initialize(args) {
    this.collection = args.collection;
    this.render();
  },

  render() {
    $('#container').html(this.el);

    this.$el.append(this.template);
  },

  addNewPerson(event) {
    event.preventDefault();

    let form = $(event.target);
    let nameVal = form.find('.name').val();
    let ageVal = form.find('.age').val();

    let newPerson = new Person({
      name: nameVal,
      age: Number(ageVal)
    });

    this.collection.add(newPerson).save();

    console.log(this.collection);
  }

});

export default AddView;
