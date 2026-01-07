import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ExtendedFab, ExtendedFabProps } from '@/components/Buttons/ExtendedFab/ExtendedFab';
import '@testing-library/jest-dom';

describe('ExtendedFab', () => {
    const defaultProps: ExtendedFabProps = {
        icon: 'add',
        label: 'Add',
        tooltip: 'Click to add',
        color: 'primary'
    };

    it('renders ExtendedFab correctly with default props', () => {
        const { getByText, getByTestId } = render(<ExtendedFab {...defaultProps} />);
        const button = getByText('Add');
        const icon = getByTestId('extended-fab__icon');

        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('title', 'Click to add');
        expect(button).toHaveClass('button');
        expect(button).toHaveClass('extended-fab');
        expect(button).toHaveClass('extended-fab--primary');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass('extended-fab__icon');
    });

    it('renders ExtendedFab with secondary color', () => {
        const { getByText } = render(<ExtendedFab {...defaultProps} color="secondary" />);
        const button = getByText('Add');

        expect(button).toHaveClass('extended-fab--secondary');
    });

    it('renders ExtendedFab with lowered variant', () => {
        const { getByText } = render(<ExtendedFab {...defaultProps} lowered />);
        const button = getByText('Add');

        expect(button).toHaveClass('extended-fab--lowered');
    });

    it('renders ExtendedFab without icon', () => {
        const { getByText, queryByTestId } = render(<ExtendedFab {...{ ...defaultProps, icon: undefined }} />);
        const button = getByText('Add');
        const icon = queryByTestId('extended-fab__icon');

        expect(button).toBeInTheDocument();
        expect(icon).toBeNull();
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<ExtendedFab {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
