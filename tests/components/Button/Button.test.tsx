import { render, screen } from '@testing-library/react';
import { Button, ButtonProps } from '../../../src/components/Button/Button';
import { describe, expect, it } from 'vitest';
import React, { createRef } from 'react';

// Mock the onClick function
// const mockOnClick = jest.fn();

// Define test props
const testProps: ButtonProps = {
    color: 'secondary',
    text: 'Click me',
    type: 'button',
    variant: 'outlined'
    // onClick: mockOnClick
};

describe('Button component', () => {
    it('renders with the correct default props if they are not overwritten', () => {
        render(<Button {...testProps} />);
        screen.debug();

        const buttonElement = screen.getByTestId('button') as HTMLButtonElement;

        expect(buttonElement.className).toContain('button--medium');
    });
    it('renders with the correct text and attributes', () => {
        render(<Button {...testProps} />);
        screen.debug();

        const buttonElement = screen.getByTestId('button') as HTMLButtonElement;

        // Check if button has the correct text
        expect(buttonElement.textContent).toBe('Click me');

        // Check if button has the correct color class
        expect(buttonElement.className).toContain('button--secondary');

        // Check if button is enabled
        expect(buttonElement.disabled).toBe(false);

        // Check if button has the correct type
        expect(buttonElement.type).toBe('button');

        // Check if button triggers onClick function
        // fireEvent.click(buttonElement);
        // expect(mockOnClick).toHaveBeenCalled();
    });

    it('disables the button when disabled prop is true', () => {
        render(<Button {...testProps} disabled />);
        screen.debug();
        const buttonElement = screen.getByTestId('button') as HTMLButtonElement;
        expect(buttonElement.disabled).toBe(true);
    });

    it('renders with the correct size class', () => {
        render(<Button {...testProps} size="large" />);
        screen.debug();
        const buttonElement = screen.getByTestId('button') as HTMLButtonElement;
        expect(buttonElement.className).toContain('button--large');
    });

    it('forwards the ref to the button element', () => {
        const ref = createRef<HTMLButtonElement>();

        render(<Button {...testProps} ref={ref} />);

        const buttonElement = ref.current;

        expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
    });
});
