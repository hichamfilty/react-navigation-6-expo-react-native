import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import ProductDetail from '../Screens/ProductDetail'
import Explore from '../Screens/Explore'
import Profile from '../Screens/Profile'


const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen component={Home} name='Home' />
            <Stack.Screen component={ProductDetail} name='ProductDetail'/>
            <Stack.Screen component={Explore} name='Explore' />
            <Stack.Screen component={Profile} name='Profile' />
        </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default Routes