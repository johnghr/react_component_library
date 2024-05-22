import type { Meta, StoryObj } from '@storybook/react';
import { IconButton as IconButtonComponent, iconButtonVariants } from '@/components/Buttons/Icon/IconButton';
import { iconKeys } from '@/components/_Icon/Icon';

const meta = {
    title: 'Buttons/IconButton',
    component: IconButtonComponent,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        disabled: {
            options: [true, false],
            control: { type: 'radio' }
        },
        icon: {
            options: iconKeys,
            control: { type: 'select' }
        },
        toggle: {
            options: [true, false],
            control: { type: 'radio' }
        },
        type: { options: ['button', 'submit'], control: { type: 'radio' } },
        selected: {
            options: [true, false],
            control: { type: 'radio' },
            if: { arg: 'toggle' }
        },
        variant: {
            options: iconButtonVariants,
            control: { type: 'select' }
        }
    }
} satisfies Meta<typeof IconButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconButton: Story = {
    args: {
        icon: 'settings',
        label: 'settings',
        tooltip: 'View settings',
        type: 'button',
        variant: 'filled'
    }
};
