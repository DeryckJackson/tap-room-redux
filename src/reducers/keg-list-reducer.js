import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { id, name, brand, pints, price, alcoholContent } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          id,
          name,
          brand,
          pints,
          price,
          alcoholContent
        }
      })
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}