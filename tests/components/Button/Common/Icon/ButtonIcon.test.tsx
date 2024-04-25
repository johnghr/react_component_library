import { render, screen } from '@testing-library/react';
import { CommonButton, CommonButtonProps } from '../../../../../src/components/Buttons/Common/CommonButton';
import { describe, expect, it } from 'vitest';
import React from 'react';

const testProps: CommonButtonProps = {
    text: 'Click me',
    type: 'button',
    variant: 'outlined'
    // onClick: mockOnClick
};

describe('Button components Icon', () => {
    it('renders with left icon', () => {
        render(<CommonButton {...testProps} iconLeft="add" />);

        const LeftIconElement = screen.getByTestId('add-icon');

        expect(LeftIconElement).toBeInstanceOf(SVGSVGElement);
    });

    it('renders with right icon', () => {
        const { getByTestId } = render(<CommonButton text="Click Me" type="button" variant="filled" iconRight="add" />);

        const RightIconElement = getByTestId('add-icon');

        expect(RightIconElement).toBeInstanceOf(SVGSVGElement);
    });
});
