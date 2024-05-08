import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { IconButton } from '../../../../components/Buttons/Icon/IconButton';

const meta = {
    title: 'Buttons/IconButton/Filled',
    component: IconButton,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
    args: {
        icon: 'add',
        label: 'add',
        tooltip: 'Clear and concise description of button action',
        type: 'button',
        variant: 'filled'
    }
};

export const FilledHovered: Story = {
    args: {
        icon: 'add',
        label: 'add',
        tooltip: 'Clear and concise description of button action',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const FilledActive: Story = {
    args: {
        icon: 'add',
        label: 'add',
        tooltip: 'Clear and concise description of button action',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const FilledFocused: Story = {
    args: {
        icon: 'add',
        label: 'add',
        tooltip: 'Clear and concise description of button action',
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
        icon: 'add',
        label: 'add',
        tooltip: 'Clear and concise description of button action',
        type: 'button',
        variant: 'filled'
    }
};
