import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../../components/Button/Button';

const meta = {
    title: 'Button/Eleveated/IconRight',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Eleveated: Story = {
    args: {
        disabled: false,
        iconRight: 'add',
        text: 'Label',
        type: 'button',
        variant: 'elevated'
    }
};

export const EleveatedHovered: Story = {
    args: {
        disabled: false,
        iconRight: 'add',
        text: 'Label',
        type: 'button',
        variant: 'elevated'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const EleveatedActive: Story = {
    args: {
        disabled: false,
        iconRight: 'add',
        text: 'Label',
        type: 'button',
        variant: 'elevated'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const EleveatedFocused: Story = {
    args: {
        disabled: false,
        iconRight: 'add',
        text: 'Label',
        type: 'button',
        variant: 'elevated'
    },
    parameters: {
        pseudo: { focus: true }
    }
};

export const EleveatedDisabled: Story = {
    args: {
        disabled: true,
        iconRight: 'add',
        text: 'Label',
        type: 'button',
        variant: 'elevated'
    }
};
