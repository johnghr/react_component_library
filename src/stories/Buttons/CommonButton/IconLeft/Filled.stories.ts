import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CommonButton } from '../../../../components/Buttons/Common/CommonButton';

const meta = {
    title: 'Buttons/CommonButton/Filled/IconLeft',
    component: CommonButton,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof CommonButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
    args: {
        iconLeft: 'add',
        label: 'Filled Button',
        type: 'button',
        variant: 'filled'
    }
};

export const FilledHovered: Story = {
    args: {
        iconLeft: 'add',
        label: 'Filled Button',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const FilledActive: Story = {
    args: {
        iconLeft: 'add',
        label: 'Filled Button',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const FilledFocused: Story = {
    args: {
        iconLeft: 'add',
        label: 'Filled Button',
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
        label: 'Filled Button',
        type: 'button',
        variant: 'filled'
    }
};
