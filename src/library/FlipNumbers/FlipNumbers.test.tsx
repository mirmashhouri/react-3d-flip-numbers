import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

import { FlipNumbers } from './FlipNumbers';


const component =
 <FlipNumbers
   value= { 12345 }
   formatter= { jest.fn((number) => number.toFixed(2)) }
   numberClassName= { 'number-class' }
   height= { 50 }
   duration= { 0.3 }
   delay= { 0 }
 />;

describe('FlipNumbers component', () => {
  test('renders FlipNumbers component', () => {
    const { container } = render(component);

    // wrapperClass
    expect(container.getElementsByClassName('flip-numbers')).toHaveLength(1);

    // toFixed() of fromatter add 2 number after "." 12345.00
    expect(container.getElementsByClassName('flip-number')).toHaveLength(7);
    expect(container.getElementsByClassName(component.props.numberClassName)).toHaveLength(7);

    // toFixed() of fromatter add a "."
    expect(container.getElementsByClassName('flip-non-number')).toHaveLength(1);
  });

  test('calls formatter with the correct value', () => {
    render(component);
    expect(component.props.formatter).toHaveBeenCalledWith(12345);
  });

  test('make snapshot', () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });
});