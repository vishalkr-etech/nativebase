/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry}from 'react-native';
import NAtiveExample from './src';
export default class nativebase extends Component {
  render() {
    return (   <NAtiveExample/> );
  }
}

AppRegistry.registerComponent('nativebase', () => nativebase);
