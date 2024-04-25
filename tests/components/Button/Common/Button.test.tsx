import { render, screen } from '@testing-library/react';
import { Button, ButtonProps } from '../../../src/components/Button/Button';
import { describe, expect, it } from 'vitest';
import React, { createRef } from 'react';

const testProps: ButtonProps = {
    text: 'Click me',
    type: 'button',
    variant: 'outlined'
    // onClick: mockOnClick
};

describe('Button component', () => {
    it('renders with the correct text and attributes', () => {
        render(<Button {...testProps} />);

        const buttonElement = screen.getByTestId('button') as HTMLButtonElement;

        expect(buttonElement.textContent).toBe('Click me');

        expect(buttonElement.disabled).toBe(false);

        expect(buttonElement.type).toBe('button');
    });

    it('disables the button when disabled prop is true', () => {
        render(<Button {...testProps} disabled />);

        const buttonElement = screen.getByTestId('button') as HTMLButtonElement;

        expect(buttonElement.disabled).toBe(true);
    });

    it('forwards the ref to the button element', () => {
        const ref = createRef<HTMLButtonElement>();

        render(<Button {...testProps} ref={ref} />);

        const buttonElement = ref.current;

        expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
    });
});
