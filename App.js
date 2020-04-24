import React, {Component} from 'react';
import {View, Text} from 'react-native';

import MapView from './MapView.js';
export default class App extends Component {
  state = {};
  render() {
    return <MapView zoomEnabled={false} style={{flex: 1}} />;
  }
}
