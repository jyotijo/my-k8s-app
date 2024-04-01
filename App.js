import * as react from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './Home/Home';
import Database from './Database/Database';
import Details from './Details/Details';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "Home" component = {Home} />
      <Stack.Screen name = "Student List" component = {Database} />
      <Stack.Screen name = "Details" component = {Details} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

