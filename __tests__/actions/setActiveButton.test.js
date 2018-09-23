import * as actions from '../../src/actions';

describe('set active button action', () => {
  it('returns a button passed in to become active', () => {
    expect(actions.setActiveButton("newbutton")).toEqual({type: "SET_ACTIVE", payload: "newbutton"});
  })
})
