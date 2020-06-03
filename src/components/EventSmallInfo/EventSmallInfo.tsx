import React from 'react';
import './EventSmallInfo.scss';

interface Props {
  currentInfo: ShortInfo,
}

export const EventSmallInfo: React.FC<Props> = ({ currentInfo }) => {
  return (
    <div className="Event__InfoWrapper">
      <img
        src={currentInfo.imageUrl}
        alt="calendar"
        className="Event__Icons"
      />

      <div className="Event__CalendarInfo">
        <p className="Event__Descr">
          {currentInfo.infoDate}
        </p>
        <p className="Event__Descr">
          {currentInfo.moreInfo}
        </p>
        <a
          href={currentInfo.link}
          className="Event__Link"
        >
          {currentInfo.linkText}
        </a>
      </div>
    </div>
  );
};

