import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HeaderComp = ({navigation, text, goBack}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', height: 42}}>
        {
            !!goBack ? <TouchableOpacity onPress={ !!goBack ? goBack : () => navigation.goBack()}>
                <Text>Go Back</Text>
                </TouchableOpacity> : <Text/>
        }
      <TouchableOpacity >
      <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderComp

const styles = StyleSheet.create({})