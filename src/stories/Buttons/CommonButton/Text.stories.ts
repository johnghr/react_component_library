import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CommonButton } from '../../../components/Buttons/Common/CommonButton';

const meta = {
    title: 'Buttons/CommonButton/Text',
    component: CommonButton,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof CommonButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const label: Story = {
    args: {
        label: 'Text Button',
        type: 'button',
        variant: 'text'
    }
};

export const TextHovered: Story = {
    args: {
        label: 'Text Button',
        type: 'button',
        variant: 'text'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const TextActive: Story = {
    args: {
        label: 'Text Button',
        type: 'button',
        variant: 'text'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const TextFocused: Story = {
    args: {
        label: 'Text Button',
        type: 'button',
        variant: 'text'
    },
    parameters: {
        pseudo: { focus: true }
    }
};

export const TextDisabled: Story = {
    args: {
        disabled: true,
        label: 'Text Button',
        type: 'button',
        variant: 'text'
    }
};
