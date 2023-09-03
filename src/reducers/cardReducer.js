// src/reducers/userReducer.js
const initialState = {
    cards: {},
    duplicateCardError: null, // Initialize the error property
  };
  
  const cardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CARD':
        const { cardName } = action.payload;
  
        if (state.cards[cardName]) {
          return {
            ...state,
            duplicateCardError: `Card '${cardName}' already exists.`,
          };
        }
  
        return {
          ...state,
          cards: {
            ...state.cards,
            [cardName]: action.payload,
          },
          duplicateCardError: null,
        };
  
      default:
        return state; 
    }
  };
  
  export default cardReducer;
  