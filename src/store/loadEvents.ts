import { AnyAction } from 'redux';
import { LOAD_EVENTS } from './actionTypes';

const reducer = (state = [], action: AnyAction) => {
  switch (action.type) {
    case LOAD_EVENTS:
      return action.events;

    default:
      return state;
  };
};

export default reducer;