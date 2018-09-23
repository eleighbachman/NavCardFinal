import activeClassReducer from '../../src/reducers/activeClassReducer';
import data from '../../src/data/data.json';

describe('active class reducer', () => {
  it('has a default state', () => {
    const activeClass = data[Object.keys(data)[0]]["class"];
    expect(activeClassReducer(undefined, { type: "Unknown", payload: "something unknown" })).toEqual(activeClass)
  })
  it('returns the active class', () => {
    expect(activeClassReducer(undefined, {type: "SET_ACTIVE", payload: "Term loan"})).toEqual("addContent")
  })
})
