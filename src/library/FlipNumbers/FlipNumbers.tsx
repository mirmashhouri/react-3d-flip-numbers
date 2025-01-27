import React, { useEffect, useState } from 'react';

import { FlipNumber } from './FlipNumber';
import { IFlipNumbers } from './types';

import './styles.css';

export const FlipNumbers: IFlipNumbers = ({
  value,
  formatter = (num) => num.toString(),
  wrapperClassName = '',
  numberClassName = '',
  height,
  duration = 0.3,
  delay = 0,
  hasShadow = false,
}) => {
  const [previousValue, setPreviousValue] = useState(value);
  const [flipDirection, setFlipDirection] = useState<1 | -1>(1);

  useEffect(() => {
    setFlipDirection(value < previousValue ? 1 : -1);
    setPreviousValue(value);
  }, [value, previousValue]);

  const formattedValue = formatter(value);
  const charArray = Array.from(formattedValue);

  return (
    <section className={ `flip-numbers ${wrapperClassName}` }>
      { charArray.map((char, index) => {
        const numericValue = parseInt(char, 10);

        return !Number.isNaN(numericValue) ? (
          <FlipNumber
            key={ `flip-${index.toString()}` }
            height={ height }
            duration={ duration }
            direction={ flipDirection }
            delay={ delay }
            activeNumber={ numericValue }
            className={ numberClassName }
            hasShadow={ hasShadow }
          />
        ) : (
          <span
            className="flip-non-number"
            key={ `char-${index.toString()}` }
          >
            { char }
          </span>
        );
      }) }
    </section>
  );
};
