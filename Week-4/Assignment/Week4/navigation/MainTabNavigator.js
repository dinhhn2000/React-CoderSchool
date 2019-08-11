import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';

import todoStack from './todoStack'
import doneStack from './doneStack'

todoStack.path = '';

doneStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Other',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    todo: todoStack,
    done: doneStack,
    SettingsStack,
  }
);

tabNavigator.path = '';

export default tabNavigator;
