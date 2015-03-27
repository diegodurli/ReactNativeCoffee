React = require 'react-native'

MyCustomView = require './views/MyCustomView'

App = React.createClass
  render: ->
    <MyCustomView myCustomProp={'!'}>
    </MyCustomView>

module.exports = App