/**
 * @format
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import Routers from './Test/Routers'
import {name as appName} from './app.json';

export default class helloworld extends Component {
    render() {
      return (
       <App/>
      );
    }
  }

AppRegistry.registerComponent('helloworld', () => helloworld);
