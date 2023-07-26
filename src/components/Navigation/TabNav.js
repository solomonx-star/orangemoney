import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import Home from "../../screens/Home"
import { NavigationContainer } from '@react-navigation/native';
import Account from "../../screens/Account"
import Partners from "../../screens/Partners"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopUpScreen from '../../screens/TopUpScreen/TopUpScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()


//HomeScreen and tabs
const HomeScreen = ()=>{
  
    return(
        <Stack.Navigator
        screenOptions={{headerShown:false}}
        >
        <Stack.Screen name='HomeScreen' component={Home}/>
        <Stack.Screen name='TopUpScreen' component={TopUpScreen}/>
        </Stack.Navigator>
    )
}


//Account tabs and screens
const AccountScreen = ()=>{
    return(
        <Stack.Navigator
        screenOptions={{headerShown:false}}
        >
        <Stack.Screen name='AccountHome' component={Account}/>
        </Stack.Navigator>
    )
}


//Partners Screen and tabs
const PartnersScreen = ()=>{
    return(
        <Stack.Navigator
        screenOptions={{headerShown:false}}
        >
        <Stack.Screen name='PartnerHome' component={Partners}/>
        </Stack.Navigator>
    )
}


//Bottom Navigation
export default function TabNav() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar />
        
        <Tab.Navigator screenOptions={{
          tabBarActiveTintColor: 'gray'
          
        }}>
          <Tab.Screen name="Home" component={HomeScreen} options = {{headerTitle: 'Home', headerTitleAlign:'left', tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={30} color={'orange'} />
          ), }}/>
          <Tab.Screen name="Partners" component={PartnersScreen} options = {{headerTitle: 'Our partners', headerTitleAlign:'left', tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shuffle" size={30} color={'orange'} />
          )}}/>
          <Tab.Screen name="Account" component={AccountScreen} options = {{headerTitle: 'My account', headerTitleAlign:'left', tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={30} color={'orange'} />
          ),}}/>
        </Tab.Navigator>
        
      </GestureHandlerRootView>
    
      
    
  );
}


