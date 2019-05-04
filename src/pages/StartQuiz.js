import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { cyan, white, green, red, light_gray } from '../utils/colors'
import ButtonCust from '../components/ButtonCust'


const types = {
  QUESTION: 'question',
  ANSWER: 'answer'
}

const answers = {
  CORRECT: 'correct',
  INCORRECT: 'incorrect',
}

const styles = StyleSheet.create({
  count: {
    fontSize: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardBox: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: cyan,
    minWidth: 300,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    color: white
  },
  hint: {
    marginTop: 15,
    color: white,
    textDecorationLine: 'underline',
  },
  actions: {
    flexDirection: 'row'
  },
  btnDisabled: {
    backgroundColor: light_gray,
    paddingHorizontal: 30,
    marginRight: 10
  },
  btnCorrectEnabled: {
    backgroundColor: green,
    paddingHorizontal: 30,
    marginRight: 10
  },
  btnIncorrectEnabled: {
    backgroundColor: red,
    paddingHorizontal: 30,
    marginRight: 10
  }
})

const Card = ({ text, type, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.cardBox}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>

      <Text style={styles.hint}> {
        type === types.QUESTION
          ? 'Click to show answer'
          : 'Click to show question'
      }</Text>

    </TouchableOpacity>
  )
}

class StartQuiz extends Component {

  static navigationOptions = {
    title: 'Start Quiz'
  }

  state = {
    currentQuestion: 0,
    type: types.QUESTION,
    correctAnswer: 0,
    showResult: false
  }

  toggeCard = () => {
    let { type } = this.state

    type === types.QUESTION
      ? type = types.ANSWER
      : type = types.QUESTION

    this.setState({ type })
  }

  handleResponse = (response) => {
    let { currentQuestion, correctAnswer, showResult, type } = this.state
    const { questions } = this.props
    
    type = types.QUESTION
    currentQuestion++

    if(response === answers.CORRECT){
      correctAnswer++
      currentQuestion === questions.length - 1 
        ? showResult = true
        : showResult = false
    }

    this.setState({
      currentQuestion,
      correctAnswer,
      showResult, 
      type
    })
  }

  render() {
    const { currentQuestion, type, correctAnswer } = this.state
    const { questions } = this.props
    let disabled = true
    const questionCard = questions[currentQuestion]

    type === types.ANSWER && (disabled = false)


    console.log(questionCard);

    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.count}> {`${currentQuestion + 1} / ${questions.length}`} </Text>
        <View style={styles.container}>
          <Card
            text={type === types.QUESTION
              ? questionCard.question
              : questionCard.answer}
            type={type}
            onPress={() => this.toggeCard()}
          />
          <View style={styles.actions}>
            <ButtonCust
              disabled={disabled}
              style={disabled ? styles.btnDisabled : styles.btnCorrectEnabled}
              onPress={() => !disabled && this.handleResponse(answers.CORRECT)}
            >
              Correct
          </ButtonCust>
            <ButtonCust
              disabled={disabled}
              style={disabled ? styles.btnDisabled : styles.btnIncorrectEnabled}
              onPress={() => !disabled && this.handleResponse(answers.INCORRECT)}
            >
              Incorrect
          </ButtonCust>
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }) {
  const deckName = navigation.getParam('deckName')
  console.log('deckName', deckName)

  return {
    questions: state[deckName].questions
  }
}

export default connect(mapStateToProps)(StartQuiz)