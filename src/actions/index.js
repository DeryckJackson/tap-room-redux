import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { id, name, brand, pints, price, alcoholContent } = keg;
  return {
    type: c.ADD_KEG,
    id,
    name,
    brand,
    pints,
    price,
    alcoholContent
  }
}