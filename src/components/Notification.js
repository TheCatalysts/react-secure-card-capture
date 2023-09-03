import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const duplicateCardError = useSelector((state) => state.duplicateCardError);

  if (!duplicateCardError) {
    return null;
  }

  return <div className="notification">{duplicateCardError}</div>;
};

export default Notification;
