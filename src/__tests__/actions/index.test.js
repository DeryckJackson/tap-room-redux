import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe("keg list actions", () => {
  test("addKeg should create ADD_KEG action", () => {
    expect(actions.addKeg({
      id: 1,
      name: "test",
      brand: "test brand",
      pints: 5,
      price: 5,
      alcoholContent: 4
    })).toEqual({
      type: c.ADD_KEG,
      id: 1,
      name: "test",
      brand: "test brand",
      pints: 5,
      price: 5,
      alcoholContent: 4
    })
  })
})