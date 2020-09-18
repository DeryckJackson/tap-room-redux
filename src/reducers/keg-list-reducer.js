

export default (state = {}, action) => {
  const { id, name, brand, pints, price, alcoholContent } = action;
  switch (action.type) {
    case "ADD_KEG":
      return Object.assign({}, state, {
        [id]: {
          // name,
          // brand,
          // pints,
          // price,
          // alcoholContent
        }
      })
    default:
      return state;
  }
}