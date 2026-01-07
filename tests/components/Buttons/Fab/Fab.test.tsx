import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Fab, FabProps } from '@/components/Buttons/Fab/Fab';
import '@testing-library/jest-dom';

describe('Fab', () => {
    const defaultProps: FabProps = {
        icon: 'add',
        label: 'Add',
        tooltip: 'Click to add',
        color: 'primary'
    };

    it('renders Fab correctly with default props', () => {
        const { getByTestId } = render(<Fab {...defaultProps} />);
        const button = getByTestId('fab');
        const icon = getByTestId('fab__icon');

        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('title', 'Click to add');
        expect(button).toHaveClass('button');
        expect(button).toHaveClass('fab');
        expect(button).toHaveClass('fab--primary');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass('fab__icon');
    });

    it('renders Fab with secondary color', () => {
        const { getByTestId } = render(<Fab {...defaultProps} color="secondary" />);
        const button = getByTestId('fab');

        expect(button).toHaveClass('fab--secondary');
    });

    it('renders Fab with lowered variant', () => {
        const { getByTestId } = render(<Fab {...defaultProps} lowered />);
        const button = getByTestId('fab');

        expect(button).toHaveClass('fab--lowered');
    });

    it('renders Fab with large size', () => {
        const { getByTestId } = render(<Fab {...defaultProps} size="large" />);
        const button = getByTestId('fab');
        const icon = getByTestId('fab__icon');

        expect(button).toHaveClass('fab--large');
        expect(icon).toHaveAttribute('height', '36');
        expect(icon).toHaveAttribute('width', '36');
    });

    it('renders Fab with small size', () => {
        const { getByTestId } = render(<Fab {...defaultProps} size="small" />);
        const button = getByTestId('fab');

        expect(button).toHaveClass('fab--small');
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<Fab {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
