import { render, screen } from '@testing-library/react';
import { Icon, IconProps } from '../../../src/components/Icon/Icon';
import { describe, expect, it } from 'vitest';
import React from 'react';

// Define test props
const testProps: IconProps = {
    name: 'add'
};

describe('Icon component', () => {
    it('renders the correct icon based on the name prop', () => {
        render(<Icon {...testProps} />);
        const iconElement = screen.getByTestId('add-icon');

        expect(iconElement).not.toBe(null);
    });

    it('renders a message when an invalid icon name is provided', () => {
        const invalidProps: IconProps = {
            name: 'invalidIcon' as IconProps['name']
        };
        render(<Icon {...invalidProps} />);
        const errorMessage = screen.getByText('Icon "invalidIcon" does not exist');
        expect(errorMessage).not.toBe(null);
    });

    // Add more test cases as needed for other scenarios
});
