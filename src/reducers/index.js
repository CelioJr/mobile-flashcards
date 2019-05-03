
import { FECTH_ALL_DECKS } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case FECTH_ALL_DECKS :
      return action.decks
    default :
      return state
  }
}

export default decks