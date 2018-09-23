import activeContentReducer from '../../src/reducers/activeContentReducer';
import data from '../../src/data/data.json';

describe('active content reducer', () => {
  it('has a default state', () => {
    const activeContent = data[Object.keys(data)[0]];
    expect(activeContentReducer(undefined, { type: "Unknown", payload: "unknown"})).toEqual(activeContent)
  })
  it('sets new content as active', () => {
    const outputContent = data["Term loan"];
    expect(activeContentReducer(undefined, { type: "SET_ACTIVE", payload: "Term loan"})).toEqual(outputContent)
  })
})
