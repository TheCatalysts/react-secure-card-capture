import React from 'react';
import { useSelector } from 'react-redux';
import InfoModal from './modal/InfoModal';

const Notification = () => {
  const duplicateCardError = useSelector((state) => state.duplicateCardError);

  if (!duplicateCardError) {
    return null;
  }

  return <div>
    <InfoModal errorMessage={duplicateCardError}></InfoModal>
  </div>
};

export default Notification;
