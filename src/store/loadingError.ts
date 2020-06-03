import { AnyAction } from 'redux';
import { LOADING_ERROR } from './actionTypes';

const reducer = (state = '', action: AnyAction) => {
  switch (action.type) {
    case LOADING_ERROR:
      return 'Oops, something went wrong, please, try later'

    default:
      return state;
  };
};

export default reducer;