import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { white, cyan } from '../utils/colors'

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cyan,
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: white
  }
})

export default class ButtonCust extends Component {
  render() {
    const { style = {}, onPress, disabled, ...otherProps } = this.props

    return (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={disabled ? 1 : 0.7}
          {...otherProps}
          style={[styles.button, style]}
        >
            <Text style={styles.text}>{this.props.children}</Text>
        </TouchableOpacity>
    )
  }
}
