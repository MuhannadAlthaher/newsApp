import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/Home_Screen';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Profile from '../../screens/Profile';

const Tab = createBottomTabNavigator();

function Bottomnav() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'house' : 'house'; 
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user'; 
            } 

            return <FontAwesome6 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#D32A2F',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#171717',
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
       
      </Tab.Navigator>
  );
}

export default Bottomnav;
