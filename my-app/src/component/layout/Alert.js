// racf for functional component
import React from 'react';

const Alert = ({ alert }) => {
  return (
    // && stands for and then
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
