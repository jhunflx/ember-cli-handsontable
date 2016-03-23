/*jshint node:true*/
module.exports = {
  description: ''

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
  normalizeEntityName: function() {},

  afterInstall: function() {
    var that = this;

    return this.addBowerPackageToProject('handsontable').then(function() {
      return that.addBowerPackageToProject('moment');
      return that.addBowerPackageToProject('pikaday');
      return that.addBowerPackageToProject('zeroclipboard');
    });
  }
};
