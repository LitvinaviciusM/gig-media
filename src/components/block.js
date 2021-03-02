import React from 'react';
import cn from 'classnames';
import './block.scss';

const Block = ({
  primary,
  secondary,
  small,
}) => (
  <div className={cn('block', { 'block--small': small })}>
    <div className="block__primary">
      {primary}
    </div>
    <div className="block__secondary">
      {secondary}
    </div>
  </div>
);

export default Block;
