/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Animated,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import OtherView from './src/OtherView'

export default class RNAndroidOpacityBug extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<View style={{ position: 'relative', opacity: 1 }}>
      		<View style={{ position: 'absolute' }}>
            <Text style={styles.instructions}>
              Edit and save with Cmd+S (Mac) or Ctrl+S (Windows). Changes will
              be reflected immediately in the simulator or on your device.
            </Text>
          </View>
       	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNAndroidOpacityBug', () => RNAndroidOpacityBug);
