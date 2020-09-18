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

  test("Should return default state if no action type is recognized", () => {
    expect(kegListReducer({}, { type: null })).toEqual({})
  })
})