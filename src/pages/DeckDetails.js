import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated } from 'react-native'
import {connect} from 'react-redux'
import { cyan, light_gray } from '../utils/colors'
import ButtonCust from '../components/ButtonCust'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 50,
    color: cyan,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  count: {
    fontSize: 30,
    color: cyan,
    textAlign: 'center',
    marginBottom: 30
  },
})

class DeckDetails extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('deck', 'Details'),
    };
  };

  state = {
    bounce: new Animated.Value(1),
  }

  componentDidMount() {
    const { bounce } = this.state
    Animated.sequence([
      Animated.timing(bounce, { duration: 200, toValue: 1.04}),
      Animated.spring(bounce, { toValue: 1, friction: 4})
    ]).start()
  }
  
  render() {

    const { deck, navigation } = this.props;
    const { bounce } = this.state;
    let disabled = true;

    if(deck.questions.length > 0) {
      disabled = false
    }

    return (
      <View style={styles.container}>
            <Animated.Text 
              // style={styles.title}
              style={[styles.title, {transform: [{scale: bounce}]}]}>
              {deck.title}
            </Animated.Text>
            <Text style={styles.count}>{deck.questions.length} Cards</Text>
          <ButtonCust 
            style={{marginBottom: 30}}
            onPress={() => navigation.navigate('AddCard', {'deckName': deck.title })}
            >
              Add Card
            </ButtonCust>
          <ButtonCust
            disabled={disabled}
            style={disabled ? { backgroundColor: light_gray } : { backgroundColor: cyan }}
            onPress={() => !disabled && navigation.navigate('StartQuiz', {'deckName': deck.title})}
            >
            Start Quiz
          </ButtonCust>
      </View>
    )
  }
}

function mapStateToProps(state, {navigation}){
  return {
    deck: state[navigation.getParam('deck')]
  }
}

export default connect(mapStateToProps)(DeckDetails)