import { render, screen } from '@testing-library/react';
import { Button, ButtonProps } from '../../../src/components/Button/Button';
import { describe, expect, it } from 'vitest';
import React from 'react';

// Mock the onClick function
// const mockOnClick = jest.fn();

// Define test props
const testProps: ButtonProps = {
    color: 'primary',
    text: 'Click me',
    type: 'button',
    variant: 'filled'
    // onClick: mockOnClick
};

describe('Button component', () => {
    it('renders with the correct default props if they are not overwritten', () => {
        const { getByText } = render(<Button {...testProps} />);
        screen.debug();

        const buttonElement = getByText('Click me') as HTMLButtonElement;

        expect(buttonElement.className).toContain('button--medium');
    });
    it('renders with the correct text and attributes', () => {
        const { getByText } = render(<Button {...testProps} />);
        screen.debug();

        const buttonElement = getByText('Click me') as HTMLButtonElement;

        // Check if button has the correct text
        expect(buttonElement.textContent).toBe('Click me');

        // Check if button has the correct color class
        expect(buttonElement.className).toContain('button--primary');

        // Check if button is enabled
        expect(buttonElement.disabled).toBe(false);

        // Check if button has the correct type
        expect(buttonElement.type).toBe('button');

        // Check if button triggers onClick function
        // fireEvent.click(buttonElement);
        // expect(mockOnClick).toHaveBeenCalled();
    });

    it('disables the button when disabled prop is true', () => {
        const { getByText } = render(<Button {...testProps} disabled />);
        screen.debug();
        const buttonElement = getByText('Click me') as HTMLButtonElement;
        expect(buttonElement.disabled).toBe(true);
    });

    it('renders with the correct size class', () => {
        const { getByText } = render(<Button {...testProps} size="large" />);
        screen.debug();
        const buttonElement = getByText('Click me') as HTMLButtonElement;
        expect(buttonElement.className).toContain('button--large');
    });
});