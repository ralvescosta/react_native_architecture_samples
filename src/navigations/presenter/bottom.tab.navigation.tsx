import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomTab = createMaterialBottomTabNavigator();

import {Dashboard} from '../../dashboard/presenter/dashboard.screen';
import {SearchScreenModule} from '../../search/search.module';
import {SettingsScreen} from '../../settings/presenter/settings.screen';

export const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      barStyle={{
        backgroundColor: '#fff',
        elevation: 5,
      }}
      screenOptions={{
        
      }}
      >
      <BottomTab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => <MaterialIcons name="dashboard" color={color} size={24} />,
        }}
      />
      <BottomTab.Screen
        name="search"
        component={SearchScreenModule}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => <MaterialIcons name="search" color={color} size={24} />,
        }}
      />

      <BottomTab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => <MaterialIcons name="unfold-more" color={color} size={24} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
