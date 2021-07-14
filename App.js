import React, { Component } from 'react';
import { Text, View } from 'react-native';
//import News from './news';
import Proflie from './proflie';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();


const SettingsScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>use case
        </Text>
      </View>
    );
}

export default class App extends Component {
  render() {
    return (
    
    

     
      <NavigationContainer>
       
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}
        >
            
            <Tab.Screen name="Proflie" component={Proflie} />
        </Tab.Navigator>
        </NavigationContainer>
       
    );
  }
}
