import Ember from 'ember';

export default Ember.Controller.extend({

  testContent: "<b>Test content</b>",

  testToolbar: [
    { command: 'bold', title: 'Ctrl+B', iconClass: 'fa fa-bold', iconAlt:'Bold'},
    { command: 'italic', title: 'Ctrl+I', iconClass: 'fa fa-italic', iconAlt:'Italic' },
    { command: 'underline', title: 'Ctrl+U', iconClass: 'fa fa-underline', iconAlt:'Underline' }
  ],

});