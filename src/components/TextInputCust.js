import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

import { cyan, light_gray } from '../utils/colors'

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    fontSize: 32,
    paddingLeft: 6,
    marginBottom: 30
  }
})

export default class TextInputCust extends Component {
  state = {
    isFocused: false
  }

  handleFocus = event => {
    this.setState({ isFocused: true })

    if (this.props.onFocus) {
      this.props.onFocus(event)
    }
  }

  handleBlur = event => {
    this.setState({ isFocused: false })

    if (this.props.onBlur) {
      this.props.onBlur(event)
    }
  }

  render() {
    const { isFocused } = this.state;
    const { onFocus, onBlur, style, ...otherProps } = this.props;
    return (
      <TextInput
        selectionColor={cyan}
        underlineColorAndroid={
          isFocused ? cyan : light_gray
        }
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        style={[styles.textInput, style]}
        {...otherProps}
      />
    );
  }
}
