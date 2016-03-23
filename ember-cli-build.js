/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import('bower_components/handsontable/dist/handsontable.full.css');
  app.import('bower_components/handsontable/dist/handsontable.full.js');
  app.import('bower_components/moment/moment.js');
  app.import('bower_components/pikaday/pikaday.js');
  app.import('bower_components/pikaday/scss/pikaday.scss');
  app.import('bower_components/zeroclipboard/dist/ZeroClipboard.js');
  app.import('bower_components/zeroclipboard/dist/ZeroClipboard.swf');

  return app.toTree();
};
