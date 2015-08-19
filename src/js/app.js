import $ from 'jquery';
import Backbone from 'backbone';

import People from './collections/people';
import Router from './router/main';
import Person from './models/person';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'ChLISqsdkrBjZhWfxblTnPuAsYj9ktNDV5f7VX10',
    'X-Parse-REST-API-Key': 'o6YXpcYlgOLBn5nC5dKZwJhvHf7aPJsQhywb9AVc'
  }
});

let allPeople = new People();

allPeople.fetch().done( function () {

  new Router({ collection: allPeople });
  Backbone.history.start();

});
