import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { IconButton } from '../../../../components/Buttons/Icon/IconButton';

const meta = {
    title: 'Buttons/IconButton/Filled/Selected',
    component: IconButton,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilledSelected: Story = {
    args: {
        icon: 'add',
        label: 'Add',
        selected: true,
        tooltip: 'Clear and concise description of button action',
        type: 'button',
        variant: 'filled'
    }
};

export const FilledSelectedHovered: Story = {
    args: {
        icon: 'add',
        label: 'Add',
        selected: true,
        tooltip: 'Clear and concise description of button action',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const FilledSelectedActive: Story = {
    args: {
        icon: 'add',
        label: 'Add',
        selected: true,
        tooltip: 'Clear and concise description of button action',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const FilledSelectedFocused: Story = {
    args: {
        icon: 'add',
        label: 'Add',
        selected: true,
        tooltip: 'Clear and concise description of button action',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        pseudo: { focus: true }
    }
};

export const FilledSelectedDisabled: Story = {
    args: {
        disabled: true,
        icon: 'add',
        label: 'Add',
        selected: true,
        tooltip: 'Clear and concise description of button action',
        type: 'button',
        variant: 'filled'
    }
};
