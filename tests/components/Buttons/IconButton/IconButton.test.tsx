import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { IconButton, IconButtonProps } from '../../../../src/components/Buttons/Icon/IconButton';
import React from 'react';
import '@testing-library/jest-dom';

describe('IconButton', () => {
    const defaultProps: IconButtonProps = {
        icon: 'add',
        label: 'Add',
        tooltip: 'Click to add',
        variant: 'outlined'
    };

    it('renders IconButton correctly with default props', () => {
        const { getByTestId } = render(<IconButton {...defaultProps} />);
        const button = getByTestId('button');
        const icon = getByTestId('icon');

        expect(button).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
        expect(button).toHaveAttribute('title', 'Click to add');
        expect(button).toHaveClass('icon-button');
        expect(icon).toHaveClass('icon-button__icon--outlined');
    });

    it('renders as selected when `selected` prop is true', () => {
        const { getByTestId } = render(<IconButton {...defaultProps} selected />);
        const button = getByTestId('button');

        expect(button).toHaveClass('icon-button--selected');
    });

    it('renders with filled variant', () => {
        const { getByTestId } = render(<IconButton {...defaultProps} variant="filled" />);
        const icon = getByTestId('icon');

        expect(icon).toHaveClass('icon-button__icon--filled');
    });

    it('renders disabled IconButton', () => {
        const { getByTestId } = render(<IconButton {...defaultProps} disabled />);
        const button = getByTestId('button');

        expect(button).toBeDisabled();
    });
});
