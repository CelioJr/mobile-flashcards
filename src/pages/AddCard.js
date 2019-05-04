import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ButtonCust from '../components/ButtonCust';

import TextInputCust from '../components/TextInputCust';
import { light_gray, cyan } from '../utils/colors'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { addNewCard } from '../actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class AddCard extends Component {

  static navigationOptions = {
    title: 'Add Card'
  }

  state = {
    answer: null,
    question: null
  }

  saveCard(){
    const { addNewCard, navigation } = this.props
    const { answer, question } = this.state
    const deckName = navigation.getParam('deckName')

    //dispatch action save 
    addNewCard(deckName, { question, answer })

    //go to Deck details
    navigation.navigate('DeckDetails', { 'deck': deckName })
    
  }

  render() {

    const { question, answer } = this.state
    let disabled = true 

    if((question !== null && question !== '') && (answer !==null && answer !=='')){
      disabled=false
    }

    return (
      <View style={styles.container}>
        <TextInputCust
          onChangeText={(question) => this.setState({question})}
          placeholder="Whats is your question?" />
        <TextInputCust
          placeholder="What is your answer?"
          onChangeText={(answer) => this.setState({answer})}
        />
        <ButtonCust
          disabled={disabled}
          style={disabled ? { backgroundColor: light_gray } : { backgroundColor: cyan }}
          onPress={() => !disabled && this.saveCard()}
        >
          Save
        </ButtonCust>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ addNewCard }, dispatch)
}
export default connect(null, mapDispatchToProps)(AddCard)
