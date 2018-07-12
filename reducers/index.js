import { GET_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function getDecks(state = {}, action) {

  if (action.type === GET_DECKS || action.type === ADD_DECK || action.type === ADD_CARD) {
    return { ...state, ...action.decks }
  }

  return state

}

export default getDecks