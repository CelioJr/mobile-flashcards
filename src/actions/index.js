import { getDecks, addCardToDeck, saveDeckTitle } from "../utils/api";

export const  FECTH_ALL_DECKS = 'FECTH_ALL_DECKS'
export const ADD_NEW_CARD = 'ADD_NEW_CARD'
export const SAVE_DECK = 'SAVE_DECK'

export function fetchAllDecks() {
    return (dispatch) => {
        getDecks()
            .then(res => {
                dispatch({
                    type: FECTH_ALL_DECKS,
                    decks: res
                })
            })
    }
}

export function addNewCard(deckName, question){
    return (dispatch) => {
        dispatch({
            type: ADD_NEW_CARD,
            deckName,
            question
        })

        addCardToDeck(deckName, question)
    }
}

export function saveDeck(title) {
    return (dispatch) => {
        dispatch({
            type: SAVE_DECK,
            title
        })
        saveDeckTitle(title)
    }
}
