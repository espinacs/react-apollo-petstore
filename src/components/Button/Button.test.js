import React from 'react';
import { render, cleanup, Simulate } from 'react-testing-library';
import Button from './';

afterEach(cleanup);

describe('Button', () => {
  const content = 'Click me'
  const onClick = jest.fn()
  test('renders default', () => {
    const props = { onClick };
    const { container, getByText } = render(<Button {...props}>{content}</Button>);
    expect(getByText(content)).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot();
  });
  
  test('renders being primary', () => {
    const props = { onClick, primary: true };
    const { container, getByText } = render(<Button {...props}>{content}</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
  
  test('is Clicked', () => {
    const props = { onClick };
    const {
      container, getByLabelText, getByText, getByTestId
    } = render(<Button {...props}>{content}</Button>);
    getByText(content).click();
    expect(onClick).toBeCalledTimes(1)

  });
});