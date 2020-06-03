import { LOADING_STATUS } from './actionTypes';
import { AnyAction } from 'redux';

const reducer = (state = false, action: AnyAction) => {
  switch (action.type) {
    case LOADING_STATUS:
      return action.status;

    default:
      return state;
  };
};

export default reducer;