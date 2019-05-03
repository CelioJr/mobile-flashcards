import { fecthAllDecks } from "../utils/api";

export const  FECTH_ALL_DECKS = 'FECTH_ALL_DECKS'

export function getDecks() {
    return (dispatch) => {
        fecthAllDecks()
            .then(res => {
                dispatch({
                    type: FECTH_ALL_DECKS,
                    decks: res
                })
            })
    }
}
