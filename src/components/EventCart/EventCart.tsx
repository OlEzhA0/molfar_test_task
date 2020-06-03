import React from 'react';
import './EventCart.scss';
import { useSelector } from 'react-redux';
import { getEventsDetails } from '../../store/actionSelectors';
import { ButtonForDetails } from '../ButtonForDetails';

export const EventCart = () => {
  const events: Events[] = useSelector(getEventsDetails);

  return (
    <>
      {events.map(event => (
        <div className="EventCart" key={event.id}>
          <div className="EventCart__Container" >
            <p className="EventCart__Title">
              {event.title}
            </p>
            <ButtonForDetails
              id={event.id}
            />
          </div>
        </div>
      ))}
    </>
  );
};
