import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NavigationLink, NavigationLinkProps } from '@/components/Drawer/Navigation/NavigationLink';
import { MemoryRouter, NavLink as ReactRouterNavLink } from 'react-router-dom';
import { createRef } from 'react';

const testPropsAnchor: NavigationLinkProps = {
    label: 'Dashboard',
    leadingIcon: 'home',
    iconFilled: true,
    linkElement: 'a',
    href: '/dashboard'
};

const testPropsNavLink: NavigationLinkProps = {
    label: 'Dashboard',
    leadingIcon: 'home',
    iconFilled: false,
    linkElement: ReactRouterNavLink,
    to: '/dashboard'
};

describe('NavLink component', () => {
    it('renders as an anchor tag with the correct attributes', () => {
        render(<NavigationLink {...testPropsAnchor} />);

        const linkElement = screen.getByRole('link') as HTMLAnchorElement;

        expect(linkElement).toHaveAttribute('href', '/dashboard');
        expect(linkElement.textContent).toContain('Dashboard');
        expect(screen.getByTestId('navigation-link-leading-icon')).toBeInTheDocument();
    });

    it('renders as a NavLink component with the correct attributes', () => {
        render(
            <MemoryRouter>
                <NavigationLink {...testPropsNavLink} />
            </MemoryRouter>
        );

        const linkElement = screen.getByRole('link') as HTMLAnchorElement;

        expect(linkElement).toHaveAttribute('href', '/dashboard');
        expect(linkElement.textContent).toContain('Dashboard');
        expect(screen.getByTestId('navigation-link-leading-icon')).toBeInTheDocument();
    });

    it('renders the leading icon with the correct className and filled status', () => {
        render(
            <MemoryRouter>
                <NavigationLink {...testPropsNavLink} />
            </MemoryRouter>
        );

        const leadingIcon = screen.getByTestId('navigation-link-leading-icon');
        expect(leadingIcon).toHaveClass('navigation-link__leading-icon');
    });

    it('forwards refs to the underlying link element', () => {
        const ref = createRef<HTMLAnchorElement>();

        render(
            <MemoryRouter>
                <NavigationLink {...testPropsNavLink} ref={ref} />
            </MemoryRouter>
        );

        expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
                <NavigationLink {...testPropsNavLink} />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
