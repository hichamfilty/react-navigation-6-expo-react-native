import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComp from '../Components/HeaderComp'
import ButtonComp from '../Components/ButtonComp'
import Profile from './Profile'

const Home = ({navigation}) => {
   const goToScreen =() => {
       navigation.navigate('Profile')
   }
  return (
    <View>
        <SafeAreaView style={{ marginHorizontal: 24 }}>
            <HeaderComp text='Home'/>
            <ButtonComp btnText='Product Details' onPress={goToScreen} />
        </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})