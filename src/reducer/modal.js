import { OPEN_MODAL } from "../actions/types";

// eslint-disable-next-line
export default function (state = false, action) {
  switch (action.type) {
    case OPEN_MODAL:
      state = !state;
      return state;
    default:
      return state;
  }
}
