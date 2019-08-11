import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import todoScreen from '../screens/todoScreen'
import TabBarIcon from '../components/TabBarIcon';
import todoDetailScreen from '../screens/todoDetailScreen';

const todoStack = createStackNavigator(
    {
        todo: todoScreen,
        todoDetail : todoDetailScreen
    },
);

todoStack.navigationOptions = {
    tabBarLabel: 'Todo List',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'ios-list'
            }
        />
    ),
};

export default todoStack;
