import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from '../../../src/components/Button/Button';
import '@testing-library/jest-dom'; // Import to extend Jest's matchers

// Mock the onClick function
const mockOnClick = jest.fn();

// Define test props
const testProps: ButtonProps = {
  color: 'primary',
  text: 'Click me',
  type: 'button',
  variant: 'filled',
  onClick: mockOnClick,
};

describe('Button component', () => {
  it('renders with the correct text and attributes', () => {
    const { getByText, getByTestId } = render(<Button {...testProps} />);
    
    const buttonElement = getByText('Click me');
    
    // Check if button has the correct text
    expect(buttonElement).toBeInTheDocument();
    
    // Check if button has the correct color class
    expect(buttonElement).toHaveClass('button--primary');
    
    // Check if button is enabled
    expect(buttonElement).not.toBeDisabled();
    
    // Check if button has the correct type
    expect(buttonElement).toHaveAttribute('type', 'button');
    
    // Check if button triggers onClick function
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('disables the button when disabled prop is true', () => {
    const { getByText } = render(<Button {...testProps} disabled />);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeDisabled();
  });

  it('renders with the correct size class', () => {
    const { getByText } = render(<Button {...testProps} size="large" />);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toHaveClass('button--large');
  });
});