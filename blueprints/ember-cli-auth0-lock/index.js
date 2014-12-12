/* jshint node: true */
'use strict';

module.exports = {
  normalizeEntityName: function(entityName) {
    return entityName;
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('auth0-lock', '~6.6.2');
  }
};
