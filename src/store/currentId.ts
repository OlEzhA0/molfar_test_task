import { AnyAction } from 'redux';
import { CURRENT_POPUP_ID } from './actionTypes';

const reducer = (state = null, action: AnyAction) => {
  switch (action.type) {
    case CURRENT_POPUP_ID:
      return action.id;

    default:
      return state;
  };
};

export default reducer;