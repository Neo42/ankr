import { GET_ANKRS, DELETE_ANKR, ADD_ANKR } from '../actions/types.js';

const initialState = {
  cards: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ANKRS:
      return {
        ...state,
        cards: action.payload,
      };
    case DELETE_ANKR:
      return {
        ...state,
        cards: state.cards.filter(({ id }) => id !== action.payload),
      };
    case ADD_ANKR:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    default:
      return state;
  }
}
