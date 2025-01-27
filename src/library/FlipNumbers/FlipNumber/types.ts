import type { FC } from 'react';

export type IFlipNumber = FC<{
  duration: number;
  activeNumber: number;
  delay: number;
  direction: 1 | -1;
  height: number;
  hasShadow: boolean;
  className?: string;
}>;

export interface FlipNumberState {
  degree: number;
  rotateCounter: number;
}
