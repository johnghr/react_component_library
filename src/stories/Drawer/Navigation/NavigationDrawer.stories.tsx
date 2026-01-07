import type { Meta, StoryObj } from '@storybook/react';
import { NavigationDrawer as NavigationDrawerComponent, NavigationDrawerProps } from '@/components/Drawer/Navigation/NavigationDrawer';
import { MemoryRouter, NavLink as RouterNavLink } from 'react-router-dom';
import { NavigationLink } from '@/components';
import { NavigationAccordion } from '@/components/Drawer/Navigation/NavigationAccordion';

const meta = {
    title: 'Drawers/Navigation/NavigationDrawer',
    component: NavigationDrawerComponent,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        label: {
            control: { type: 'text' }
        },
        withHeadline: {
            control: { type: 'boolean' }
        }
    }
} satisfies Meta<typeof NavigationDrawerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

const NavigationDrawerTemplate = {
    render: ({ children, content, ...args }: NavigationDrawerProps) => {
        return (
            <MemoryRouter>
                {content ? (
                    <NavigationDrawerComponent {...{ ...args, content }} />
                ) : (
                    <NavigationDrawerComponent {...args}>{children}</NavigationDrawerComponent>
                )}
            </MemoryRouter>
        );
    }
};

export const NavigationDrawerWithConfig: Story = {
    ...NavigationDrawerTemplate,
    args: {
        label: 'Navigation drawer',
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
                        { linkElement: 'a', href: '/users/deleted', label: 'Deleted users', leadingIcon: 'deletedUser', iconFilled: true },
                        { linkElement: 'a', href: '/users', label: 'Manage users', leadingIcon: 'manageUsers', iconFilled: true },
                        { linkElement: 'a', href: '/users/deleted', label: 'Deleted users', leadingIcon: 'deletedUser', iconFilled: true },
                        { linkElement: 'a', href: '/users', label: 'Manage users', leadingIcon: 'manageUsers', iconFilled: true },
                        { linkElement: 'a', href: '/users/deleted', label: 'Deleted users', leadingIcon: 'deletedUser', iconFilled: true },
                        { linkElement: 'a', href: '/users', label: 'Manage users', leadingIcon: 'manageUsers', iconFilled: true },
                        { linkElement: 'a', href: '/users/deleted', label: 'Deleted users', leadingIcon: 'deletedUser', iconFilled: true },
                        { linkElement: 'a', href: '/users', label: 'Manage users', leadingIcon: 'manageUsers', iconFilled: true },
                        { linkElement: 'a', href: '/users/deleted', label: 'Deleted users', leadingIcon: 'deletedUser', iconFilled: true },
                        { linkElement: 'a', href: '/users', label: 'Manage users', leadingIcon: 'manageUsers', iconFilled: true },
                        { linkElement: 'a', href: '/users/deleted', label: 'Deleted users', leadingIcon: 'deletedUser', iconFilled: true }
                    ]
                }
            },
            { type: 'link', props: { linkElement: RouterNavLink, to: '#settings', label: 'Settings', leadingIcon: 'settings', iconFilled: true } }
        ]
    }
};

const children = (
    <>
        <NavigationLink {...{ linkElement: 'a', href: '#dashboard', label: 'Dashboard', leadingIcon: 'home', iconFilled: true }} />
        <NavigationAccordion leadingIcon="users" label="Users" headingLevel="h2" iconFilled>
            <NavigationLink
                {...{ linkElement: 'a', href: '/users', label: 'Manage users', leadingIcon: 'manageUsers', iconFilled: true }}
                accordionLink
            />
            <NavigationLink
                {...{ linkElement: 'a', href: '/users/deleted', label: 'Deleted users', leadingIcon: 'deletedUser', iconFilled: true }}
                accordionLink
            />
        </NavigationAccordion>
        <NavigationLink {...{ linkElement: RouterNavLink, to: '#settings', label: 'Settings', leadingIcon: 'settings', iconFilled: true }} />
    </>
);
export const NavigationDrawerWithChildren: Story = {
    ...NavigationDrawerTemplate,
    args: {
        label: 'Navigation drawer',
        children
    }
};
