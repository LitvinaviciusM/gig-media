import React from 'react';
import './block.scss';

const Block = ({
  title,
  text,
}) => (
  <article className="block">
    <h1>
      {title}
    </h1>
    <p>
      {text}
    </p>
  </article>
);

export default Block;
