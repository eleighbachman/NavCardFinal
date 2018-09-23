import buttonsReducer from '../../src/reducers/buttonsReducer';
import data from '../../src/data/data.json';

describe('buttons reducer', () => {
  it('has a default state', () => {
    const buttons = ["Credit card", "Term loan"];
    expect(buttonsReducer(buttons, { type: "Unknown", payload: "unknown"})).toEqual(buttons)
  })
})
