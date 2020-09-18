import kegListReducer from "../../reducers/keg-list-reducer"
import * as c from "../../actions/ActionTypes"

describe("kegListReducer", () => {

  let action;

  const kegData = {
    id: 1,
    name: "This is only a test Brew",
    brand: "OnTap",
    pints: 64,
    price: 3,
    alcoholContent: 4
  }

  const currentState = {
    1: {
      id: 1,
      name: "This is only a test Brew number 1",
      brand: "OnTap",
      pints: 64,
      price: 3,
      alcoholContent: 4
    },
    2: {
      id: 2,
      name: "This is only a test Brew number 2",
      brand: "OnTap",
      pints: 32,
      price: 3,
      alcoholContent: 4
    }
  }

  test("Should successfully add new keg data to kegList", () => {
    const { id, name, brand, pints, price, alcoholContent } = kegData;

    action = {
      type: c.ADD_KEG,
      id,
      name,
      brand,
      pints,
      price,
      alcoholContent
    }
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        id,
        name,
        brand,
        pints,
        price,
        alcoholContent
      }
    })
  })

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        id: 2,
        name: "This is only a test Brew number 2",
        brand: "OnTap",
        pints: 32,
        price: 3,
        alcoholContent: 4
      }
    });
  });

  test("Should return default state if no action type is recognized", () => {
    expect(kegListReducer({}, { type: null })).toEqual({})
  })
})