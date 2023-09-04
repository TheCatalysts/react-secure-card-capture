const initialState = {
  cards: []
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      const { cardNumber } = action.payload;

      return {
        ...state,
        cards: {
          ...state.cards,
          [cardNumber]: action.payload,
        }
      };

    default:
      return state;
  }
};

export default cardReducer;
