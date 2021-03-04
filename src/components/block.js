import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import './block.scss';

const Block = ({
  randomMeter,
  isMonochrome,
  isUpsideDown,
  title,
  text,
}) => {
  const [backgroundColor, setBackgroundColorColor] = useState();

  useEffect(() => {
    if (!randomMeter) return;
    const totalRGB = 16777215; // total possible RGB combinations
    const blockHash = Math.random(); // Unique hash per block
    const hash = blockHash * totalRGB; // Unique hash per block and session
    setBackgroundColorColor('#' + parseInt(hash, 10).toString(16)); // Format hex color and set value
  }, [randomMeter]);

  return (
    <article
      {...backgroundColor ? { style: { backgroundColor } } : {}}
      className={cn('block', {
        'block--monochrome': isMonochrome,
        'block--upsidedown': isUpsideDown,
      })}
    >
      <h1>
        {title}
      </h1>
      <p>
        {text}
      </p>
    </article>
  );
};
export default Block;
