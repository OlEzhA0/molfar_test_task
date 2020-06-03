import React from 'react';
import './EventAboutInfo.scss';

interface Props {
  about: string,
}

export const EventAboutInfo: React.FC<Props> = ({ about }) => {
  return (
    <div className="Event__About">
      <p className="Event__AboutTitle">
        About
      </p>
      <p className="Event__AboutSnippet">
        {about}
      </p>
    </div>
  );
};

