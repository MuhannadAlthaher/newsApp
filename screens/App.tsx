import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { Button } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import LoginScreen from './LoginScreen';
import Bottomnav from '../src/Bottom_Nav/Bottom_Nav';
import Contant from './Contant'; 
import FavoritesContextProvider from '../store/context/favorite-news'; 
import Profile from './Profile';
import { Provider } from 'react-redux';
import store from '../store/redux/Login';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
        screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#171717',
        },
        drawerActiveBackgroundColor: '#171717',
        drawerActiveTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#171717',
        },
        drawerIcon: () => <FontAwesome6 name="house" size={22} color="red" />,
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Bottomnav} 
        options={{ 
          title: 'Home', 
          drawerLabel: 'Home', 
        }} 
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>

    
    <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DrawerNavigation"
            component={DrawerNavigation}
            options={{ headerShown: false }} 
            
          />
          <Stack.Screen
            name="Contant"
            component={Contant}
            options={{
              headerRight: () => <Button title="Fav" />,
              headerBackTitle: 'Back',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#171717',
              },

            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
     
    </FavoritesContextProvider>
    </Provider>
  );
}

export default App;
