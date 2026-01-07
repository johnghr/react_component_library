import { render, screen, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from '@/components/Buttons/Button';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';

const testProps: ButtonProps = {
    label: 'click me',
    onClick: vi.fn(),
    className: 'custom-button',
    disabled: false
};

describe('Button component', () => {
    it('renders the button with the correct label', () => {
        render(<Button {...testProps}>Button Text</Button>);
        const buttonElement = screen.getByLabelText('click me');

        expect(buttonElement).toBeInTheDocument();
    });

    it('renders the button with the correct children', () => {
        render(<Button {...testProps}>Button Text</Button>);
        const buttonElement = screen.getByText('Button Text');

        expect(buttonElement).toBeInTheDocument();
    });

    it('applies the correct className', () => {
        render(
            <Button {...testProps} data-testid="button">
                Button Text
            </Button>
        );
        const buttonElement = screen.getByTestId('button');

        expect(buttonElement).toHaveClass('custom-button');
    });

    it('handles onClick event', () => {
        const handleClick = vi.fn();
        render(
            <Button {...testProps} onClick={handleClick} data-testid="button">
                Button Text
            </Button>
        );
        const buttonElement = screen.getByTestId('button');

        fireEvent.click(buttonElement);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('is disabled when the disabled prop is true', () => {
        render(
            <Button {...testProps} disabled data-testid="button">
                Button Text
            </Button>
        );
        const buttonElement = screen.getByTestId('button');

        expect(buttonElement).toBeDisabled();
    });

    it('forwards ref correctly', () => {
        const ref = { current: null };
        render(
            <Button {...testProps} ref={ref} data-testid="button">
                Button Text
            </Button>
        );
        const buttonElement = screen.getByTestId('button');

        expect(ref.current).toBe(buttonElement);
    });

    it('renders the button with additional attributes', () => {
        render(
            <Button {...testProps} type="submit" data-custom-attribute="custom-value" data-testid="button">
                Button Text
            </Button>
        );
        const buttonElement = screen.getByTestId('button');

        expect(buttonElement).toHaveAttribute('type', 'submit');
        expect(buttonElement).toHaveAttribute('data-custom-attribute', 'custom-value');
    });
});
