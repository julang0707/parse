import $ from 'jquery';
import Backbone from 'backbone';
import {_} from 'underscore';

let html = `

  <li> <%= name %> </li>

`;

let Home = Backbone.View.extend({

  className: 'people-list',
  tagName: 'ul',

  template: _.template(html),

  initialize(args) {

    this.collection = args.collection;
    this.render();
  },

  render() {
    let self = this;

    $('#container').html(this.el);

    _.each(this.collection.models, function(person){
      self.$el.append(self.template(person.attributes));
    });
  }

});

export default Home;
