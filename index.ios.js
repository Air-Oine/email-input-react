import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import EmailTextInput from './src/EmailTextInput'

export default class EmailView extends Component {
  render() {
    return (
      <EmailTextInput/>
    );
  }
}

AppRegistry.registerComponent('EmailView', () => EmailView);
