import React from 'react';
import './ButtonForDetails.scss';
import { useDispatch } from 'react-redux';
import { openPopup, setCurrentPopupId } from '../../store/actionCreators';

interface Props {
  id: number,
}

export const ButtonForDetails: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <div className="ButtonForDetails">
      <button
        type='button'
        onClick={() => {
          dispatch(openPopup())
          dispatch(setCurrentPopupId(id))
        }}
        className="ButtonForDetails__Button"
      >
        Show details
      </button>
    </div>
  );
};

