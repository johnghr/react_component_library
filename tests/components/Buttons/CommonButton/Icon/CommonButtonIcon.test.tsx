import { render, screen } from '@testing-library/react';
import { CommonButton, CommonButtonProps } from '../../../../../src/components/Buttons/Common/CommonButton';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

const testProps: CommonButtonProps = {
    label: 'Click me',
    type: 'button',
    variant: 'outlined'
};

describe('Button components Icon', () => {
    it('renders with left icon', () => {
        render(<CommonButton {...testProps} iconLeft="add" />);

        const leftIconElement = screen.getByTestId('icon');

        expect(leftIconElement).toBeInstanceOf(SVGSVGElement);
        expect(leftIconElement).toHaveAttribute('aria-hidden', 'true');
    });

    it('renders with right icon', () => {
        const { getByTestId } = render(<CommonButton {...testProps} iconRight="add" />);

        const rightIconElement = getByTestId('icon');

        expect(rightIconElement).toBeInstanceOf(SVGSVGElement);
    });

    it('renders the icon with the correct className', () => {
        const { getByTestId } = render(<CommonButton {...testProps} iconRight="add" />);
        const rightIconElement = getByTestId('icon');

        expect(rightIconElement).toHaveClass('icon common-button__icon common-button__icon--right');
    });
});
