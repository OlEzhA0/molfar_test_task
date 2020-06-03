import { LOADED_STATUS } from './actionTypes';
import { AnyAction } from 'redux';

const reducer = (state = false, action: AnyAction) => {
  switch (action.type) {
    case LOADED_STATUS:
      return action.status;

    default:
      return state;
  };
};

export default reducer;