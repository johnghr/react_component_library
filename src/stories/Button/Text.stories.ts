import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../components/Button/Button';

const meta = {
    title: 'Button/Text',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'text'
    }
};

export const TextHovered: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'text'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const TextActive: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'text'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const TextFocused: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'text'
    },
    parameters: {
        pseudo: { focus: true }
    }
};

export const TextDisabled: Story = {
    args: {
        color: 'primary',
        disabled: true,
        text: 'Label',
        type: 'button',
        variant: 'text'
    }
};
