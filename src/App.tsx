import React, { useEffect } from 'react';
import { EventDetails } from './components/EventDetails';
import cn from 'classnames';
import { getPopupStatus, getLoadingStatus, getLoadedStatus, getErrorMessage } from './store/actionSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { LoadSpinner } from './components/LoadSpinner';
import { loadEvents } from './store';
import { EventCart } from './components/EventCart';

function App() {
  const isOpen = useSelector(getPopupStatus);
  const loading = useSelector(getLoadingStatus);
  const isLoaded = useSelector(getLoadedStatus);
  const errorMessage = useSelector(getErrorMessage);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadEvents())
  }, [dispatch]);

  return (
    <>
      {loading && <LoadSpinner />}
      {!isLoaded && errorMessage && (
        <p className="ErrorText">
          {errorMessage}
        </p>
      )}
      {isLoaded && (
        <>
          <EventCart />
          <EventDetails />
          <div className={cn({
            'Layout': true,
            'Layout--shadow': isOpen,
          })} />
        </>
      )}
    </>
  );
}

export default App;
