import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CommonButton } from '../../../../components/Buttons/Common/CommonButton';

const meta = {
    title: 'Buttons/CommonButton/Eleveated',
    component: CommonButton,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof CommonButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Eleveated: Story = {
    args: {
        label: 'Elevated Button',
        type: 'button',
        variant: 'elevated'
    }
};

export const EleveatedHovered: Story = {
    args: {
        label: 'Elevated Button',
        type: 'button',
        variant: 'elevated'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const EleveatedActive: Story = {
    args: {
        label: 'Elevated Button',
        type: 'button',
        variant: 'elevated'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const EleveatedFocused: Story = {
    args: {
        label: 'Elevated Button',
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
        label: 'Elevated Button',
        type: 'button',
        variant: 'elevated'
    }
};
