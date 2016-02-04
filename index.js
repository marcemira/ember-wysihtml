/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-wysihtml',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/wysihtml/dist/wysihtml-toolbar.js');
    app.import(app.bowerDirectory + '/wysihtml/parser_rules/advanced_and_extended.js');

  }
};
