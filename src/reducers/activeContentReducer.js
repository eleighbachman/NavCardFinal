import data from '../data/data.json';
import { SET_ACTIVE } from '../actions';
const activeContent = data[Object.keys(data)[0]];

export default function(state=activeContent, action) {
  switch (action.type) {
    case SET_ACTIVE:
      return {...data[action.payload]}
    default:
      return state;
  }
}
