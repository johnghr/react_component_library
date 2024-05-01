import { render, screen } from '@testing-library/react';
import { CommonButton, CommonButtonProps } from '../../../../../src/components/Buttons/Common/CommonButton';
import { describe, expect, it } from 'vitest';
import React from 'react';
import '@testing-library/jest-dom';

const testProps: CommonButtonProps = {
    label: 'Click me',
    type: 'button',
    variant: 'outlined'
};

describe('Button components Icon', () => {
    it('renders with left icon', () => {
        render(<CommonButton {...testProps} iconLeft="add" />);

        const LeftIconElement = screen.getByTestId('icon');

        expect(LeftIconElement).toBeInstanceOf(SVGSVGElement);
    });

    it('renders with right icon', () => {
        const { getByTestId } = render(<CommonButton {...testProps} iconRight="add" />);

        const RightIconElement = getByTestId('icon');

        expect(RightIconElement).toBeInstanceOf(SVGSVGElement);
    });

    it('renders the icon with the correct className', () => {
        const { getByTestId } = render(<CommonButton {...testProps} iconRight="add" />);
        const RightIconElement = getByTestId('icon');

        expect(RightIconElement).toHaveClass('icon add-icon common-button__icon common-button__icon--right');
    });
});
