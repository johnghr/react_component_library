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
    it('renders with the correct default props if they are not overwritten', () => {
        render(<Button {...testProps} />);

        const buttonElement = screen.getByTestId('button') as HTMLButtonElement;

        expect(buttonElement.className).toContain('button--primary');
    });

    it('renders with the correct text and attributes', () => {
        render(<Button {...{ ...testProps, color: 'secondary' }} />);

        const buttonElement = screen.getByTestId('button') as HTMLButtonElement;

        expect(buttonElement.textContent).toBe('Click me');

        expect(buttonElement.className).toContain('button--secondary');

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
