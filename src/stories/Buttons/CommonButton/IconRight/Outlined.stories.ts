import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CommonButton } from '../../../../components/Buttons/Common/CommonButton';

const meta = {
    title: 'Buttons/CommonButton/Outlined/IconRight',
    component: CommonButton,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof CommonButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
    args: {
        iconRight: 'add',
        label: 'Outlined Button',
        type: 'button',
        variant: 'outlined'
    }
};

export const OutlinedHovered: Story = {
    args: {
        iconRight: 'add',
        label: 'Outlined Button',
        type: 'button',
        variant: 'outlined'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const OutlinedActive: Story = {
    args: {
        iconRight: 'add',
        label: 'Outlined Button',
        type: 'button',
        variant: 'outlined'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const OutlinedFocused: Story = {
    args: {
        iconRight: 'add',
        label: 'Outlined Button',
        type: 'button',
        variant: 'outlined'
    },
    parameters: {
        pseudo: { focus: true }
    }
};

export const OutlinedDisabled: Story = {
    args: {
        disabled: true,
        iconRight: 'add',
        label: 'Outlined Button',
        type: 'button',
        variant: 'outlined'
    }
};
