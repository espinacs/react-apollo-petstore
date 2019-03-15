import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Home from '.';

afterEach(cleanup);

describe('Home', () => {
  test('renders default', () => {

    const { container } = render(<Home />)
    expect(container.firstChild).toMatchSnapshot();
  });
});