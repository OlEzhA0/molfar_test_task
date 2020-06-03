import React, { useState } from 'react';
import cn from 'classnames';
import './EventDetails.scss';
import './Event.scss';
import './Info.scss';

import { useSelector, useDispatch } from 'react-redux';
import { getPopupStatus, getCurrentPopupId, getEventsDetails } from '../../store/actionSelectors';
import { EventSmallInfo } from '../EventSmallInfo';
import { EventAboutInfo } from '../EventAboutInfo';
import { setCurrentPopupId, closePopup } from '../../store/actionCreators';

export const EventDetails = () => {
  const [barStatus, setBarStatus] = useState(false)
  const dispatch = useDispatch();
  const isOpen = useSelector(getPopupStatus);
  const currentId = useSelector(getCurrentPopupId);
  const events = useSelector(getEventsDetails);
  const currentInfo: Events = events.find((event: Events) => event.id === currentId) || events[0];

  const closePopupWindow = () => {
    dispatch(setCurrentPopupId(null));
    dispatch(closePopup());
    setBarStatus(false);
  }

  return (
    <>
      {isOpen && (
        <>
          <label className="CloseButton">
            <button
              className="CloseButton__btn"
              onClick={() => closePopupWindow()}
            />
          </label>

          <label className="Event__BackMemorial">
            <span className="Event__MainText">
              <img
                src="images/icons/back.svg"
                alt="arrow left"
                className="Event__BackIcon"
              />
            Back to memorial
          </span>
            <button
              className="Event__BackMemorial--btn"
              onClick={closePopupWindow}
            />
          </label>
        </>
      )}

      <div className={cn({
        'Event': true,
        'EventDetails': true,
        'EventDetails--open': isOpen,
      })}>
        <label className="Event__MoreInfoButton">
          <span className="Event__MainDot">.</span>
          <button
            className="Event__MoreInfoButton--btn"
            onClick={() => setBarStatus(!barStatus)}
          />
        </label>

        <div className={cn({
          'Info__Container': true,
          'Info__Container--open': barStatus,
        })}>
          <ul className="Info__List">
            <li className="Info__Item">
              <img
                src="images/icons/mail.svg"
                alt="mail"
                className="Info__Icons"
              />
              <a
                href="https://www.molfar.io/contacts"
                className="Info__Link"
              >
                Contact owner
              </a>
            </li>
            <li className="Info__Item">
              <img
                src="images/icons/flag.svg"
                alt="mail"
                className="Info__Icons"
              />
              <a
                href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=smoothie@molfar.io`}
                className="Info__Link"
              >
                Report this event
              </a>
            </li>
          </ul>
        </div>
        <div className="Event__InfoContainer">
          <h2 className="Event__Title">
            {currentInfo.title}
          </h2>
          <div className="Event__PlaceAndDescr">
            <div className="Event__Information">
              <EventSmallInfo currentInfo={currentInfo.calendar} />
              <EventSmallInfo currentInfo={currentInfo.address} />
            </div>
            <EventAboutInfo about={currentInfo.about} />
          </div>
          <div className="Event__ButtonContainer">
            <button
              type='button'
              className="Event__Button"
              onClick={closePopupWindow}
            >
              <img src="images/icons/checkMark.svg" alt="check mark" className="Event__CheckMark" />
          Attending
      </button>
          </div>
        </div>
      </div>
    </>
  );
};
