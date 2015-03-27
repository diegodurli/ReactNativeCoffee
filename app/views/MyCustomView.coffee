React = require 'react-native'
{ StyleSheet, Text, View } = React

MyCustomView = React.createClass
	render: ->
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native! :)
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.coffee{'\n'}
        Press Cmd+R to test{@props.myCustomProp}
      </Text>
    </View>

styles = StyleSheet.create
  container:
    flex: 1
    justifyContent: 'center'
    alignItems: 'center'
    backgroundColor: '#512DA8'
  welcome:
    fontSize: 20
    textAlign: 'center'
    color: '#FFFFFF'
    margin: 10
  instructions:
    textAlign: 'center'
    color: '#8BC34A'

module.exports = MyCustomView