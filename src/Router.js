import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Food from './pages/Food/Food';
import Detail from './pages/Detail/Detail';
import Categories from './pages/Categories/Categories';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoryPage"
          component={Categories}
          options={{
            title: 'Categories',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {fontSize: 25},
            headerTintColor: '#f9a825',
            headerTitleAlign: 'center',
          }}></Stack.Screen>
        <Stack.Screen
          name="FoodPage"
          component={Food}
          options={{
            title: 'Meals',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {fontSize: 25},
            headerTintColor: '#f9a825',
            headerTitleAlign: 'center',
          }}></Stack.Screen>
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detail',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {fontSize: 25},
            headerTintColor: '#f9a825',
            headerTitleAlign: 'center',
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
