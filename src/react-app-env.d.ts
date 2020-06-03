/// <reference types="react-scripts" />

interface ReduxInitState {
  popupStatus: boolean;
  events: Events[];
  isLoading: boolean;
};

interface ShortInfo {
  infoDate: string;
  moreInfo: string;
  linkText: string;
  imageUrl: string;
  link: string;
};

interface Events {
  id: number;
  title: string;
  description: string;
  about: string;
  calendar: ShortInfo;
  address: ShortInfo;
};