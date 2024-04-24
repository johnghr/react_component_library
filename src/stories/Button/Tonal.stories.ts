import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../components/Button/Button';

const meta = {
    title: 'Button/Tonal',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tonal: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'tonal'
    }
};

export const TonalHovered: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'tonal'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const TonalActive: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'tonal'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const TonalFocused: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'tonal'
    },
    parameters: {
        pseudo: { focus: true }
    }
};

export const TonalDisabled: Story = {
    args: {
        color: 'primary',
        disabled: true,
        text: 'Label',
        type: 'button',
        variant: 'tonal'
    }
};
