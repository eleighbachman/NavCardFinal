import * as actions from '../../src/actions';

describe('it shows form data', () => {
  it('returns data based on passed in form', () => {
    expect(actions.showFormData("formA")).toEqual({ type: "SHOW_FORM_DATA", payload: "formA"})
  })
})
