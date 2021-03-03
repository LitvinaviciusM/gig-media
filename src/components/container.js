import React from 'react';
import './container.scss';

const Container = ({ children, variant }) => (
  <div className={`container container--${variant}`}>
    {children}
  </div>
);

export default Container;
