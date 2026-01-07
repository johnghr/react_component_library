import type { Meta, StoryObj } from '@storybook/react';
import { Accordion as AccordionComponent } from '@/components/Drawer/Accordion/Accordion';
import { iconKeys } from '@/components/_Icon/Icon';

const meta = {
    title: 'Drawers/Accordion/Accordion',
    component: AccordionComponent,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        leadingIcon: {
            options: [undefined, ...iconKeys],
            control: { type: 'select' }
        }
    }
} satisfies Meta<typeof AccordionComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Accordion: Story = {
    args: {
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        headingLevel: 'h2',
        label: 'Accordion label',
        leadingIcon: 'filter'
    }
};
