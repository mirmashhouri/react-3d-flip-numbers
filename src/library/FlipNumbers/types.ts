import type { FC } from 'react';

export type FlipDirection = 'increase' | 'decrease';

export type FlipNumberProps = {
  value: number;
  height: number;
  wrapperClassName?: string;
  numberClassName?: string;
  duration?: number;
  delay?: number;
  formatter?: (value: number) => string;
  hasShadow?: boolean;
};
export type IFlipNumbers = FC<FlipNumberProps>;
