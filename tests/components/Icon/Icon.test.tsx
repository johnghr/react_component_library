import { render, screen } from '@testing-library/react';
import { Icon, IconProps } from '@/components/_Icon/Icon';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

// Define test props
const testProps: IconProps = {
    focusable: false,
    icon: 'add'
};

describe('Icon component', () => {
    it('renders the correct icon based on the name prop', () => {
        render(<Icon {...testProps} />);
        const iconElement = screen.getByTestId('icon');

        expect(iconElement).not.toBe(null);
    });

    it('renders the icon with the correct default className', () => {
        render(<Icon {...testProps} />);
        const iconElement = screen.getByTestId('icon');

        expect(iconElement).toHaveClass('icon');
    });

    it('renders the icon with the correct block scoped className', () => {
        render(<Icon {...testProps} className="block__icon" />);
        const iconElement = screen.getByTestId('icon');

        expect(iconElement).toHaveClass('icon block__icon');
    });

    it('renders the icon with the correct focusable attribute', () => {
        render(<Icon {...testProps} />);
        const iconElement = screen.getByTestId('icon');

        expect(iconElement).toHaveAttribute('focusable', 'false');
    });
});
