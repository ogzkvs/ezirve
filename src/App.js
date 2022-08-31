import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './components/Login';
import Peaks from './components/Peaks';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Login') {
              iconName = focused ? 'home' : 'home-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Giriş',
            headerTitleAlign: 'center',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Peaks"
          component={Peaks}
          options={{
            title: 'DORUKLAR',
            headerTitleAlign: 'center',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
