import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../../components/Button/Button';

const meta = {
    title: 'Button/Outlined/IconLeft',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
    args: {
        disabled: false,
        iconLeft: 'add',
        text: 'Label',
        type: 'button',
        variant: 'outlined'
    }
};

export const OutlinedHovered: Story = {
    args: {
        disabled: false,
        iconLeft: 'add',
        text: 'Label',
        type: 'button',
        variant: 'outlined'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const OutlinedActive: Story = {
    args: {
        disabled: false,
        iconLeft: 'add',
        text: 'Label',
        type: 'button',
        variant: 'outlined'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const OutlinedFocused: Story = {
    args: {
        disabled: false,
        iconLeft: 'add',
        text: 'Label',
        type: 'button',
        variant: 'outlined'
    },
    parameters: {
        pseudo: { focus: true }
    }
};

export const OutlinedDisabled: Story = {
    args: {
        disabled: true,
        iconLeft: 'add',
        text: 'Label',
        type: 'button',
        variant: 'outlined'
    }
};
