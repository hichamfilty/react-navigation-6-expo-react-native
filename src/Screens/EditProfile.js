import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'
import HeaderComp from '../Components/HeaderComp'

const EditProfile = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComp goBack={() => navigation.goBack()} />
        <View style={{margin: 24 }}>
          <Text>Edit Profile</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})