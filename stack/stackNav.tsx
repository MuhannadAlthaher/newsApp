import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home_Screen';
import App from '../screens/App';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={App} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}