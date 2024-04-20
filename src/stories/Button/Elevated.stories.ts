import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../components/Button/Button';

const meta = {
    title: 'Button/Eleveated',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],

    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Eleveated: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'elevated'
    }
};

export const EleveatedHovered: Story = {
    args: {
        color: 'primary',
        disabled: false,
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
        color: 'primary',
        disabled: false,
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
        color: 'primary',
        disabled: false,
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
        color: 'primary',
        disabled: true,
        text: 'Label',
        type: 'button',
        variant: 'elevated'
    }
};