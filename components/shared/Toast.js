import React, { useEffect } from 'react';
import './Toast.scss';

const Toast = ({ children, type, show, handleOnClick }) => {
  const baseClass = 'toast';
  let cssClass = '';

  switch (type) {
    case 'error':
      cssClass = `${baseClass} toast--error`;
      break;
    case 'warning':
      cssClass = `${baseClass} toast--warning`;
      break;
    case 'success':
      cssClass = `${baseClass} toast--success`;
      break;
    default:
      cssClass = baseClass;
      break;
  }

  cssClass = show ? `${cssClass} toast--show` : `${cssClass} toast--hide`;

  useEffect(() => {
    console.log('toast monunted.');
    return () => {
      console.log('toast unmounted.');
    };
  }, []);

  useEffect(
    () => {
      console.log('toast changed');
    },
    [show]
  );

  return (
    <div className={cssClass} onClick={handleOnClick}>
      {children}
    </div>
  );
};

export default Toast;
