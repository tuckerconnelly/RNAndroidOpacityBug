/* eslint-disable no-bitwise */
import React, { Component, PropTypes } from 'react'
import { Animated, View, Text } from 'react-native'

import HomePage from './HomePage'

class Route extends Component {
  componentDidMount(next) {
    Animated.timing(this._activateAV, {
      toValue: 1,
      duration: 1000
    }).start()
  }
  
  _activateAV = new Animated.Value(this.props.active | 0)
  
  render() {
    return (
      <Animated.View style={{ opacity: 1 }}>
        {this.props.children}
      </Animated.View>
    )
  }
}

Route.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
}

const Index = ({ routeFragment }) =>
  <View>
    <Route active><HomePage /></Route>
    <Route><HomePage /></Route>
  </View>

Index.propTypes = {
  // createOrchestrator
}

export default Index

const styles = {
  base: {
    position: 'relative',
  },
}
