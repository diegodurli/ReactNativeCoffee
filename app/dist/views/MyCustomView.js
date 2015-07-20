var MyCustomView, React, StyleSheet, Text, View, styles;

React = require('react-native');

StyleSheet = React.StyleSheet, Text = React.Text, View = React.View;

MyCustomView = React.createClass({
  render: function() {
    return React.createElement(View, {
      "style": styles.container
    }, React.createElement(Text, {
      "style": styles.welcome
    }, "Welcome to React Native! :)"), React.createElement(Text, {
      "style": styles.instructions
    }, "To get started, edit index.ios.coffee", '\n', "Press Cmd+R to test", this.props.myCustomProp));
  }
});

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#C8E6C9',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
});

module.exports = MyCustomView;
