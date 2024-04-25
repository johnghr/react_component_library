import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../../components/Buttons/Common/CommonButton';

const meta = {
    title: 'Button/Filled/IconLeft',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
    args: {
        disabled: false,
        iconLeft: 'add',
        text: 'Label',
        type: 'button',
        variant: 'filled'
    }
};

export const FilledHovered: Story = {
    args: {
        disabled: false,
        iconLeft: 'add',
        text: 'Label',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const FilledActive: Story = {
    args: {
        disabled: false,
        iconLeft: 'add',
        text: 'Label',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const FilledFocused: Story = {
    args: {
        disabled: false,
        iconLeft: 'add',
        text: 'Label',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        pseudo: { focus: true }
    }
};

export const FilledDisabled: Story = {
    args: {
        disabled: true,
        iconLeft: 'add',
        text: 'Label',
        type: 'button',
        variant: 'filled'
    }
};
