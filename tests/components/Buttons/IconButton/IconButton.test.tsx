import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { IconButton, IconButtonProps } from '@/components/Buttons/Icon/IconButton';
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
        const button = getByTestId('icon-button');
        const icon = getByTestId('icon-button__icon');

        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('title', 'Click to add');
        expect(button).toHaveClass('button');
        expect(button).toHaveClass('icon-button');
        expect(button).toHaveClass('icon-button--outlined');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass('icon-button__icon');
    });

    it('renders IconButton as selected when `selected` prop is true (for toggleable IconButton)', () => {
        const { getByTestId } = render(<IconButton {...defaultProps} selected toggle />);
        const button = getByTestId('icon-button');

        expect(button).toHaveClass('icon-button--selected');
        expect(button).toHaveAttribute('aria-checked', 'true');
    });

    it('renders IconButton with filled variant', () => {
        const { getByTestId } = render(<IconButton {...defaultProps} variant="filled" />);
        const button = getByTestId('icon-button');

        expect(button).toHaveClass('icon-button--filled');
    });

    it('renders disabled IconButton', () => {
        const { getByTestId } = render(<IconButton {...defaultProps} disabled />);
        const button = getByTestId('icon-button');

        expect(button).toBeDisabled();
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<IconButton {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
