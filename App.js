import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import Home from './src/components/Home';
import { NavigationContainer } from '@react-navigation/native';
import Account from './src/components/my account';
import Partners from './src/components/our partners';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar />
        
        <Tab.Navigator screenOptions={{
          tabBarActiveTintColor: '#ffff'
        }}>
          <Tab.Screen name="Home" component={Home} options = {{headerTitle: 'Home', headerTitleAlign:'left', tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={30} color={'orange'} />
          ), }}/>
          <Tab.Screen name="Partners" component={Partners} options = {{headerTitle: 'Our partners', headerTitleAlign:'left', tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shuffle" size={30} color={'orange'} />
          )}}/>
          <Tab.Screen name="Account" component={Account} options = {{headerTitle: 'My account', headerTitleAlign:'left', tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={30} color={'orange'} />
          ),}}/>
        </Tab.Navigator>
        
      </NavigationContainer>
      </GestureHandlerRootView>
    
      
    
  );
}


