import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'

class HomePage extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.title}>Home page</Text>
      </View>
    )
  }
}

HomePage.propTypes = {
  style: PropTypes.object,
}

export default HomePage

const styles = {
  base: {
    position: 'absolute',
  },
  
  title: {
    alignSelf: 'center',
  },
}
