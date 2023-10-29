import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonComp = ({btnText, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress} >
      <Text style={{fontSize: 16, color: 'blue'}}>{btnText}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: '#ADD8E6',
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
})