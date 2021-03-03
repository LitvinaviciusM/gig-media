import React from 'react';
import './block.scss';

const Block = ({
  title,
  text,
}) => (
  <article className="block">
    <h2>
      {title}
    </h2>
    <p>
      {text}
    </p>
  </article>
);

export default Block;
