import { RootState } from "./index";

export const getPopupStatus = (state: RootState) => state.popupStatus;
export const getEventsDetails = (state: RootState) => state.events;
export const getLoadingStatus = (state: RootState) => state.isLoading;
export const getLoadedStatus = (state: RootState) => state.isLoaded;
export const getErrorMessage = (state: RootState) => state.errorMessage;
export const getCurrentPopupId = (state: RootState) => state.currentPopupId;