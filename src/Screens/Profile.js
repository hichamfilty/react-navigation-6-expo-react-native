import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComp from '../Components/HeaderComp'
import ButtonComp from '../Components/ButtonComp'
import EditProfile from './EditProfile'

const Profile = ({navigation}) => {
  const goToScreen = () =>{
    navigation.navigate('EditProfile')
  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComp text='Profile'/>
        <ButtonComp btnText={EditProfile}  onPress={goToScreen}/>
      </SafeAreaView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})