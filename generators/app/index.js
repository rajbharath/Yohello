var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function () {
      generators.Base.apply(this, arguments);
      this.option('coffee');
  },
  method1: function () {
    console.log('Method 1 ran');
  },
  method2: function () {
    console.log('Method 2 ran');
  }
});
