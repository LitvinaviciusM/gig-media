import React from 'react';
import cn from 'classnames';
import './block.scss';

const Block = ({
  primary,
  secondary,
  small,
}) => (
  <article className={cn('block', { 'block--small': small })}>
    <h2>
      {primary}
    </h2>
    <p>
      {secondary}
    </p>
  </article>
);

export default Block;
