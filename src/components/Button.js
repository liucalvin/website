import React from 'react';
import './Button.css';

function Button({ 
  children,
  type,
  onClick,
  link,
  target
}) {
  return (
    <div className='button-wrapper' >
      <a
        href={link}
        target={target}
        className='button'
        onClick={onClick}
        type={type} >
        {children}
      </a>
    </div>
  );
};
export default Button