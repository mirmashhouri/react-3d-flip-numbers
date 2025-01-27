import React, { useEffect, useState } from 'react';
import { NUMBER_ARRAY, ROTATE_DEGREE_PER_NUMBER, REVOLUTION_DEGREES } from './consts';
import { IFlipNumber } from './types';

export const FlipNumber: IFlipNumber = ({
  className = '',
  activeNumber,
  duration,
  delay,
  direction,
  height,
  hasShadow,
}) => {
  const [rotateCounter, setRotateCounter] = useState(0);
  const [degree, setDegree] = useState(0);
  const [visibleActive, setVisibleActive] = useState(true);
  const [prevAnimateDegree, setPrevAnimateDegree] = useState(0);
  const [fixedActiveNum, setFixedActiveNum] = useState(activeNumber);
  const [numberDirection, setNumberDirection] = useState<1 | -1>(direction);

  const calculateDegrees = (newActiveNumber: number, newDuration: number, newDelay: number) => {
    setVisibleActive(false);
    const animateDegree =
      NUMBER_ARRAY.findIndex((v) => v === newActiveNumber) * ROTATE_DEGREE_PER_NUMBER;

    const amountDegree = rotateCounter * REVOLUTION_DEGREES;
    let newDegree = numberDirection * amountDegree - animateDegree;

    if (
      (numberDirection === -1 && newDegree > degree) ||
      (numberDirection === 1 && newDegree < degree)
    ) {
      const newRotateCounter = rotateCounter + 1;
      const newAmountDegree = newRotateCounter * REVOLUTION_DEGREES;
      setRotateCounter(newRotateCounter);
      newDegree = numberDirection * newAmountDegree - animateDegree;
    }

    setDegree(newDegree);
    setPrevAnimateDegree(animateDegree);

    setTimeout(() => {
      setVisibleActive(true);
    }, newDuration + newDelay);
  };

  const resetRotateCounter = (newDdirection: 1 | -1) => {
    setNumberDirection(newDdirection);
    setRotateCounter(0);
    const redirectDegree = -prevAnimateDegree;
    setDegree(redirectDegree);
  };

  useEffect(() => {
    resetRotateCounter(direction);
  }, [direction]);

  useEffect(() => {
    if (fixedActiveNum !== activeNumber) {
      calculateDegrees(activeNumber, duration, delay);
      setFixedActiveNum(activeNumber);
    }
  }, [activeNumber, fixedActiveNum]);

  useEffect(() => {
    calculateDegrees(activeNumber, duration, delay);
    setFixedActiveNum(activeNumber);
  }, []);

  const translateZ = height * 1;

  return (
    <div
      style={ { height } }
      className={ `flip-number-container ${ hasShadow && !visibleActive ? 'flip-shadow' : ''} ${className}` }
    >
      <div
        className="flip-number"
        style={ {
          transform: `rotateX(${degree}deg)`,
          transition: `transform ${duration}ms ${delay}ms ease-out`,
        } }
      >
        { NUMBER_ARRAY.map((num, i) => (
          <div
            className={ `flip-number-fake ${visibleActive ? 'invisible' : ''}` }
            style={ {
              height,
              transform: `rotateX(${ROTATE_DEGREE_PER_NUMBER * i}deg) translateZ(${translateZ}px) ${
                num === activeNumber ? 'scale3d(1, 1, 1)' : 'scale3d(1, .8, .8)'
              }`,
            } }
            key={ `${ROTATE_DEGREE_PER_NUMBER * i}` }
          >
            { num }
          </div>
        )) }
      </div>

      <div
        className={ `flip-number-active ${visibleActive ? '' : 'invisible'}` }
        style={ { height } }
      >
        { activeNumber }
      </div>
    </div>
  );
};
