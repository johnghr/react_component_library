import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../../components/Button/Button';

const meta = {
    title: 'Button/Tonal/IconLeft',
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
        disabled: false,
        iconLeft: 'add',
        text: 'Label',
        type: 'button',
        variant: 'tonal'
    }
};

export const TonalHovered: Story = {
    args: {
        disabled: false,
        iconLeft: 'add',
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
        disabled: false,
        iconLeft: 'add',
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
        disabled: false,
        iconLeft: 'add',
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
        disabled: true,
        iconLeft: 'add',
        text: 'Label',
        type: 'button',
        variant: 'tonal'
    }
};
