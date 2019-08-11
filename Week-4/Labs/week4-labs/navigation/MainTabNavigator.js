import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import {
  Text,
  View,
} from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MessageScreen from '../screens/MessageScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MessageStack = createStackNavigator(
  {
    Message: MessageScreen,
  },
  config
);

MessageStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-chatboxes'
      }
    />
  ),
};

MessageStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  MessageStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';



// export default tabNavigator;

const Drawer = () => (
  <View style={{flex: 1, justifycontent: "center"}}>
    <Text>Drawer Item 1</Text>
    <Text>Drawer Item 2</Text>
  </View>
);

const drawer = createDrawerNavigator(
  {
    Initial: tabNavigator
  },
  {
    contentComponent: Drawer
  }
);

export default drawer;
