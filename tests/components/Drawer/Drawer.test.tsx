import { render, screen } from '@testing-library/react';
import { Drawer, DrawerProps } from '@/components/Drawer/Drawer';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

const testProps: DrawerProps = {
    element: 'section',
    label: 'Test Drawer',
    content: 'This is the drawer content',
    open: true,
    withHeadline: true
};

describe('Drawer component', () => {
    it('renders with default props', () => {
        render(<Drawer element="section" label="Default Props Drawer" content="" />);
        const drawer = screen.getByRole('region');
        const drawerHeadline = screen.getByText('Default Props Drawer');

        expect(drawer).toHaveClass('drawer');
        expect(drawerHeadline).toHaveClass('sr-only');
    });

    it('renders the drawer with the correct label', () => {
        render(<Drawer {...testProps} />);
        const drawerHeadline = screen.getByText('Test Drawer');

        expect(drawerHeadline).toBeInTheDocument();
    });

    it('renders the drawer content', () => {
        render(<Drawer {...testProps} />);
        const drawerContent = screen.getByText('This is the drawer content');

        expect(drawerContent).toBeInTheDocument();
    });

    it('applies the "drawer" class when open is true', () => {
        render(<Drawer {...testProps} />);
        const drawer = screen.getByRole('region');

        expect(drawer).toHaveClass('drawer');
    });

    it('applies the "hidden" class when open is false', () => {
        render(<Drawer {...testProps} open={false} />);
        const drawer = screen.getByRole('region');

        expect(drawer).toHaveClass('hidden');
    });

    it('renders the headline with the "drawer__headline" class when withHeadline is true', () => {
        render(<Drawer {...testProps} />);
        const drawerHeadline = screen.getByText('Test Drawer');

        expect(drawerHeadline).toHaveClass('drawer__headline');
    });

    it('renders the headline with the "sr-only" class when withHeadline is false', () => {
        render(<Drawer {...testProps} withHeadline={false} />);
        const drawerHeadline = screen.getByText('Test Drawer');

        expect(drawerHeadline).toHaveClass('sr-only');
    });

    it('renders children when provided', () => {
        const childrenContent = <div>Children content</div>;
        render(
            <Drawer {...testProps} content={undefined}>
                {childrenContent}
            </Drawer>
        );
        const childElement = screen.getByText('Children content');

        expect(childElement).toBeInTheDocument();
    });

    it('applies aria-labelledby attribute correctly', () => {
        render(<Drawer {...testProps} />);
        const drawer = screen.getByRole('region');

        expect(drawer).toHaveAttribute('aria-labelledby', 'drawer-headline');
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<Drawer {...testProps} label="Test Drawer" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
