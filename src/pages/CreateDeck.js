import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TextInputCust from '../components/TextInputCust';
import ButtonCust from '../components/ButtonCust';
import { light_gray, cyan} from '../utils/colors'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveDeck } from '../actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class CreateDeck extends Component {

  state= {
    title: ''
  }

  addNewDeck(){
    const { title } = this.state
    const { saveDeck, navigation } = this.props

    console.log('ttitle:', title)
    saveDeck(title)
   
    navigation.navigate('DeckDetails', { 'deck': title })
    this.setState({ title: '' });
  }

  render() {

    const { title } = this.state
    let disabled = true;

    if(title !== ''){
      disabled= false
    }

    return (
      <View style={styles.container}>
        <TextInputCust
          style={{fontSize: 20}}
          placeholder='What is the title of your new deck ?'
          value={title}
          onChangeText={(title) => this.setState({title})}
        />
        <ButtonCust
          style={{paddingHorizontal: 60}}
          disabled={disabled}
          style={disabled ? { backgroundColor: light_gray } : { backgroundColor: cyan }}
          onPress={() => !disabled && this.addNewDeck()}
        >
        Submit</ButtonCust>
      </View>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ saveDeck }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateDeck)