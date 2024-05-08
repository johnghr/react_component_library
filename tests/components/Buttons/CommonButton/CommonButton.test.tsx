import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { createRef } from 'react';
import { CommonButton, CommonButtonProps } from '@/components/Buttons/Common/CommonButton';

const testProps: CommonButtonProps = {
    label: 'Click me',
    type: 'button',
    variant: 'outlined'
};

describe('Button component', () => {
    it('renders with the correct text and attributes', () => {
        render(<CommonButton {...testProps} />);

        const buttonElement = screen.getByTestId('button') as HTMLButtonElement;

        expect(buttonElement.textContent).toBe('Click me');

        expect(buttonElement.disabled).toBe(false);

        expect(buttonElement.type).toBe('button');
    });

    it('disables the button when disabled prop is true', () => {
        render(<CommonButton {...testProps} disabled />);

        const buttonElement = screen.getByTestId('button') as HTMLButtonElement;

        expect(buttonElement.disabled).toBe(true);
    });

    it('forwards the ref to the button element', () => {
        const ref = createRef<HTMLButtonElement>();

        render(<CommonButton {...testProps} ref={ref} />);

        const buttonElement = ref.current;

        expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
    });
});
