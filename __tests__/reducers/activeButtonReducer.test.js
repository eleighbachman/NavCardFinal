import activeButtonReducer from '../../src/reducers/activeButtonReducer';
import data from '../../src/data/data.json';

describe('active button reducer', () => {
  it('has a default state', () => {
      const activeButton = Object.keys(data)[0];
      expect(activeButtonReducer(undefined, { type: "Unknown", payload: "something unknown" })).toEqual(activeButton)
  })

  it('returns active button', () => {
    expect(activeButtonReducer({}, { type: "SET_ACTIVE", payload: "New button name" })).toEqual("New button name")
  })
})
