'use strict';
var App, AppRegistry, React;

React = require('react-native');

AppRegistry = React.AppRegistry;

App = require('./app/dist/App');

AppRegistry.registerComponent('ReactNativeCoffee', function() {
  return App;
});
