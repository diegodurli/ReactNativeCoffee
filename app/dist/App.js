var App, MyCustomView, React;

React = require('react-native');

MyCustomView = require('./views/MyCustomView');

App = React.createClass({
  render: function() {
    return React.createElement(MyCustomView, {
      "myCustomProp": '!'
    });
  }
});

module.exports = App;
