import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import doneScreen from '../screens/doneScreen'
import TabBarIcon from '../components/TabBarIcon';
import todoDetailScreen from '../screens/todoDetailScreen';

const doneStack = createStackNavigator(
    {
        done: doneScreen,
        todoDetail: todoDetailScreen
    },
);

doneStack.navigationOptions = {
    tabBarLabel: 'Done List (Not complete)',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'ios-done-all'
            }
        />
    ),
};

export default doneStack;
