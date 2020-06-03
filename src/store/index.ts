import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { Dispatch } from 'react';
import { getEvents } from './../helpers/getEvents';
import popupStatusReducer from './popupStatus';
import loadingReducer from './loadingStatus';
import eventsReducer from './loadEvents';
import loadedReducer from './loaded';
import loagingErrorReducer from './loadingError';
import currentPopupIdReducer from './currentId';

import { setEvents, setLoadingStatus, setLoadedStatus, setErrorMessage } from './actionCreators';
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  popupStatus: popupStatusReducer,
  isLoading: loadingReducer,
  events: eventsReducer,
  isLoaded: loadedReducer,
  errorMessage: loagingErrorReducer,
  currentPopupId: currentPopupIdReducer,
})

export const loadEvents = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setLoadingStatus(true));

    try {
      const data: Events[] = await getEvents();
      dispatch(setEvents(data));
      dispatch(setLoadedStatus(true));
    } catch {
      dispatch(setErrorMessage());
    }

    dispatch(setLoadingStatus(false));
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;