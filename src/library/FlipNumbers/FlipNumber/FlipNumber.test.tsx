import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

import { FlipNumber } from './FlipNumber';

const component =
<FlipNumber
  activeNumber={ 4 }
  duration= { 500 }
  delay= { 0 }
  direction= { -1 }
  height={ 50 }
  hasShadow= { false }
/>;

describe('FlipNumber component', () => {
  test('renders FlipNumber component', () => {
    const { container } = render(component);
    expect(container).toBeInTheDocument();
  });

  test('renders fake numbers', () => {
    const fakeClassName = 'flip-number-fake';
    const fakeEl = render(component).container.getElementsByClassName(fakeClassName);
    expect(fakeEl).toHaveLength(10);
  });

  test('renders flip-number-active', () => {
    const activeClassName = 'flip-number-active';
    const activeEl = render(component).container.getElementsByClassName(activeClassName);
    expect(activeEl).toHaveLength(1);
    expect(activeEl[0]).toHaveTextContent(component.props.activeNumber);
  });

  test('make snapshot', () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });
});
