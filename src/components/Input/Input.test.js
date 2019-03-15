import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Input from './';

describe('Button', () => {
  const onChange = jest.fn()
  const label = 'Username'

  test('renders without crashing', () => {
    const props = { onChange };
    render(<Input {...props} />);
  });

  test('renders with label', () => {
    const props = { onChange, label };
    const { getByText } = render(<Input {...props} />);
    expect(getByText(label)).toBeTruthy()
  });

  test('renders with label being required', () => {
    const props = { onChange, label };
    const { getByText } = render(<Input {...props} required />);
    expect(getByText(`${label} *`)).toBeTruthy()
  });
  
  test('renders and changes', () => {
    const props = { onChange };
    const { container } = render(<Input {...props} />);
    fireEvent.change(container.firstChild, { target: { value: 'a' } } ) 
    expect(onChange).toBeCalledTimes(1)
  });
});