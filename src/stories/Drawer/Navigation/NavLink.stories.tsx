import type { Meta, StoryObj } from '@storybook/react';
import { NavigationLink as NavigationLinkComponent, NavigationLinkProps } from '@/components/Drawer/Navigation/NavigationLink';
import { iconKeys } from '@/components/_Icon/Icon';
import { MemoryRouter, NavLink as RouterNavLink } from 'react-router-dom';

const meta = {
    title: 'Drawers/Navigation/NavLink',
    component: NavigationLinkComponent,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        leadingIcon: {
            options: [undefined, ...iconKeys],
            control: { type: 'select' }
        }
    }
} satisfies Meta<typeof NavigationLinkComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

const NavigationLinkTemplate = {
    render: ({ ...args }: NavigationLinkProps) => {
        return (
            <MemoryRouter>
                <NavigationLinkComponent {...args} />
            </MemoryRouter>
        );
    }
};

export const NavigationLinkWithReactRouter: Story = {
    ...NavigationLinkTemplate,
    args: {
        label: 'Manage Users',
        leadingIcon: 'users',
        to: '/admin/users',
        iconFilled: true,
        linkElement: RouterNavLink
    }
};
export const NavLinkWithAnchorElement: Story = {
    ...NavigationLinkTemplate,
    args: {
        label: 'Manage Users',
        leadingIcon: 'users',
        to: '/admin/users',
        iconFilled: true,
        linkElement: RouterNavLink
    }
};
