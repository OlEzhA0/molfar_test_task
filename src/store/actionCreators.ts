import { OPEN_POPUP, CLOSE_POPUP, LOAD_EVENTS, LOADING_STATUS, LOADED_STATUS, LOADING_ERROR, CURRENT_POPUP_ID } from "./actionTypes";

export const openPopup = () => ({ type: OPEN_POPUP });
export const closePopup = () => ({ type: CLOSE_POPUP });
export const setEvents = (events: Events[]) => ({ type: LOAD_EVENTS, events });
export const setLoadingStatus = (status: boolean) => ({ type: LOADING_STATUS, status });
export const setLoadedStatus = (status: boolean) => ({ type: LOADED_STATUS, status });
export const setErrorMessage = () => ({ type: LOADING_ERROR });
export const setCurrentPopupId = (id: number | null) => ({ type: CURRENT_POPUP_ID, id });