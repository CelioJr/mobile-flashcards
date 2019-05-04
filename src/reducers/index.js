
import { FECTH_ALL_DECKS, ADD_NEW_CARD, SAVE_DECK } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case FECTH_ALL_DECKS:
      return action.decks
    case ADD_NEW_CARD: 
      return {
        ...state,
        [action.deckName]: {
          ...state[action.deckName],
          questions: [...state[action.deckName].questions, action.card]
        }
      }
    case SAVE_DECK: 
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    default :
      return state
  }
}

export default decks