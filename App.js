import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

export default createAppContainer(createStackNavigator({
  A: {
    getScreen: () => {
      return require('./A').default;
    },
  },
  B: {
    getScreen: () => {
      return require('./B').default;
    },
  },
}));