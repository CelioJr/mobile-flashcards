import { AsyncStorage } from 'react-native'

export const STORAGE_KEY = 'FlashCards:Udacity'

const initData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'Is React a Javascript UI library?',
          answer: 'Correct'
        },
        {
          question: 'Correct place to make Ajax requests is in a render method?',
          answer: 'Incorrect'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
          answer: 'Yes'
        }, 
        { 
          question: 'JavaScript is considered a weakly typed (or untyped) language?',
          answer: 'Correct'
        }
      ]
    }
  }

 export const getDecks = async () => {
    try{
        const result = await AsyncStorage.getItem(STORAGE_KEY)
        if(result !== null){
            return JSON.parse(result)
        }

        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initData));
        return initData;

    }catch(error){
        console.log('error', error)

    }
  } 

  export const getDeck = async (deckName) => {
    const decks = await getDecks()
    return decks[deckName]
  }

  export const addCardToDeck = async (deckName, card) => {
    const decks = await getDecks(deckName)
    console.log('deckname',deckName)
    console.log(decks[deckName])
    decks[deckName].questions.push(card)
    AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks))
  }

  export const saveDeckTitle = (title) => {
      return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [title]: {title, questions: []}
      }));
  }