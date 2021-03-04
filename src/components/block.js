import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import './block.scss';

const Block = ({
  randomCounter,
  isMonochrome,
  isUpsideDown,
  title,
  text,
}) => {
  const [backgroundColor, setBackgroundColorColor] = useState();

  useEffect(() => {
    if (randomCounter) {
      const totalRGB = 16777215; // total possible RGB combinations
      const blockHash = Math.random(); // Unique hash per block
      const hash = blockHash * totalRGB;
      setBackgroundColorColor('#' + parseInt(hash, 10).toString(16)); // Format hex color and set value
    }
  }, [randomCounter]);

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
