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
        render(<CommonButton {...testProps} data-testid="common-button" />);

        const buttonElement = screen.getByTestId('common-button') as HTMLButtonElement;

        expect(buttonElement.textContent).toBe('Click me');

        expect(buttonElement.disabled).toBe(false);

        expect(buttonElement.type).toBe('button');
    });

    it('disables the button when disabled prop is true', () => {
        render(<CommonButton {...testProps} disabled data-testid="common-button" />);

        const buttonElement = screen.getByTestId('common-button') as HTMLButtonElement;

        expect(buttonElement.disabled).toBe(true);
    });

    it('forwards the ref to the button element', () => {
        const ref = createRef<HTMLButtonElement>();

        render(<CommonButton {...testProps} ref={ref} />);

        const buttonElement = ref.current;

        expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
    });
});

describe('Button components Icon', () => {
    it('renders with left icon', () => {
        render(<CommonButton {...testProps} iconLeft="add" />);

        const leftIconElement = screen.getByTestId('common-button__icon--left');

        expect(leftIconElement).toBeInstanceOf(SVGSVGElement);
        expect(leftIconElement).toHaveAttribute('aria-hidden', 'true');
    });

    it('renders with right icon', () => {
        const { getByTestId } = render(<CommonButton {...testProps} iconRight="add" />);

        const rightIconElement = getByTestId('common-button__icon--right');

        expect(rightIconElement).toBeInstanceOf(SVGSVGElement);
    });

    it('renders the icon with the correct className', () => {
        const { getByTestId } = render(<CommonButton {...testProps} iconRight="add" />);
        const rightIconElement = getByTestId('common-button__icon--right');

        expect(rightIconElement).toHaveClass('icon common-button__icon common-button__icon--right');
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<CommonButton {...testProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
