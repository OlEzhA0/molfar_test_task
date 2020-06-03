import { AnyAction } from 'redux';
import { OPEN_POPUP, CLOSE_POPUP } from './actionTypes';

const reducer = (state = false, action: AnyAction) => {
  switch (action.type) {
    case OPEN_POPUP:
      return true;

    case CLOSE_POPUP:
      return false;

    default:
      return state;
  };
};

export default reducer;