import { render, screen } from '@testing-library/react';
import { Button, ButtonProps } from '../../../../src/components/Button/Button';
import { describe, expect, it } from 'vitest';
import React, { createRef } from 'react';

const testProps: ButtonProps = {
    text: 'Click me',
    type: 'button',
    variant: 'outlined'
    // onClick: mockOnClick
};

describe('Button components Icon', () => {
    it('renders with left icon', () => {
        render(<Button {...testProps} iconLeft="add" />);

        const LeftIconElement = screen.getByTestId('add-icon');

        expect(LeftIconElement).toBeInstanceOf(SVGSVGElement);
    });

    it('renders with right icon', () => {
        const { getByTestId } = render(<Button text="Click Me" type="button" variant="filled" iconRight="add" />);

        const RightIconElement = getByTestId('add-icon');

        expect(RightIconElement).toBeInstanceOf(SVGSVGElement);
    });
});
