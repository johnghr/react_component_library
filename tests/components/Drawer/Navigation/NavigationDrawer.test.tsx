import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { NavigationDrawer, NavigationDrawerProps } from '@/components/Drawer/Navigation/NavigationDrawer';

// Sample props for testing
const testProps: NavigationDrawerProps = {
    label: 'Navigation menu',
    content: [
        { type: 'link', props: { linkElement: 'a', href: '#dashboard', label: 'Dashboard', leadingIcon: 'home', iconFilled: true } },
        {
            type: 'accordion',
            props: {
                headingLevel: 'h2',
                label: 'Users',
                leadingIcon: 'users',
                iconFilled: true,
                content: [
                    { linkElement: 'a', href: '/users', label: 'Manage users', leadingIcon: 'manageUsers', iconFilled: true },
                    { linkElement: 'a', href: '/users/deleted', label: 'Deleted users', leadingIcon: 'deletedUser', iconFilled: true }
                ]
            }
        }
    ],
    open: true,
    withHeadline: true
};

describe('NavigationDrawer component', () => {
    it('renders with default props', () => {
        render(<NavigationDrawer label="Default Props NavigationDrawer" content={[]} />);
        const drawer = screen.getByRole('navigation');
        const drawerHeadline = screen.getByText('Default Props NavigationDrawer');

        expect(drawer).toHaveClass('drawer');
        expect(drawerHeadline).toHaveClass('sr-only');
    });

    it('renders the navigation drawer with the correct label', () => {
        render(<NavigationDrawer {...testProps} />);
        const drawerHeadline = screen.getByText('Navigation menu');

        expect(drawerHeadline).toBeInTheDocument();
    });

    it('renders the navigation drawer content', () => {
        render(<NavigationDrawer {...testProps} />);
        const drawerLink = screen.getByText('Dashboard');
        const drawerAccordion = screen.getByText('Users');
        const drawerAccordionNestedLink = screen.getByText('Manage users');

        expect(drawerLink).toBeInTheDocument();
        expect(drawerAccordion).toBeInTheDocument();
        expect(drawerAccordionNestedLink).toBeInTheDocument();
    });

    it('applies the "drawer" class when showDrawer is true', () => {
        render(<NavigationDrawer {...testProps} />);
        const drawer = screen.getByRole('navigation');

        expect(drawer).toHaveClass('drawer');
    });

    it('applies the "hidden" class when showDrawer is false', () => {
        render(<NavigationDrawer {...testProps} open={false} />);
        const drawer = screen.getByRole('navigation');

        expect(drawer).toHaveClass('hidden');
    });

    it('renders the headline with the "drawer__headline" class when withHeadline is true', () => {
        render(<NavigationDrawer {...testProps} />);
        const drawerHeadline = screen.getByText('Navigation menu');

        expect(drawerHeadline).toHaveClass('drawer__headline');
    });

    it('renders the headline with the "sr-only" class when withHeadline is false', () => {
        render(<NavigationDrawer {...testProps} withHeadline={false} />);
        const drawerHeadline = screen.getByText('Navigation menu');

        expect(drawerHeadline).toHaveClass('sr-only');
    });

    it('renders children when provided', () => {
        const childrenContent = <div>Children content</div>;
        render(
            <NavigationDrawer {...testProps} content={undefined}>
                {childrenContent}
            </NavigationDrawer>
        );
        const childElement = screen.getByText('Children content');

        expect(childElement).toBeInTheDocument();
    });

    it('applies aria-labelledby attribute correctly', () => {
        render(<NavigationDrawer {...testProps} />);
        const drawer = screen.getByRole('navigation');

        expect(drawer).toHaveAttribute('aria-labelledby', 'drawer-headline');
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<NavigationDrawer {...testProps} label="Test NavigationDrawer" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
