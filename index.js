/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-handsontable',
  included: function(app) {
    this._super.included(app);

    app.import('bower_components/handsontable/dist/handsontable.full.css');
    app.import('bower_components/handsontable/dist/handsontable.full.js');
    app.import('bower_components/moment/moment.js');
    app.import('bower_components/pikaday/pikaday.js');
    app.import('bower_components/pikaday/scss/pikaday.scss');
    app.import('bower_components/zeroclipboard/dist/ZeroClipboard.js');
    app.import('bower_components/zeroclipboard/dist/ZeroClipboard.swf');
  }
};
