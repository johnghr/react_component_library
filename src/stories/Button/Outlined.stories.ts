import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../components/Button/Button';

const meta = {
    title: 'Button/Outlined',
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
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'outlined'
    }
};

export const OutlinedHovered: Story = {
    args: {
        color: 'primary',
        disabled: false,
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
        color: 'primary',
        disabled: false,
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
        color: 'primary',
        disabled: false,
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
        color: 'primary',
        disabled: true,
        text: 'Label',
        type: 'button',
        variant: 'outlined'
    }
};
