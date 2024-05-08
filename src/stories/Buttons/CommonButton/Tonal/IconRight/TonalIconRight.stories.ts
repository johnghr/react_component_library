import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CommonButton } from '../../../../../components/Buttons/Common/CommonButton';

const meta = {
    title: 'Buttons/CommonButton/Tonal/IconRight',
    component: CommonButton,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof CommonButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tonal: Story = {
    args: {
        iconRight: 'add',
        label: 'Tonal Button',
        type: 'button',
        variant: 'tonal'
    }
};

export const TonalHovered: Story = {
    args: {
        iconRight: 'add',
        label: 'Tonal Button',
        type: 'button',
        variant: 'tonal'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const TonalActive: Story = {
    args: {
        iconRight: 'add',
        label: 'Tonal Button',
        type: 'button',
        variant: 'tonal'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const TonalFocused: Story = {
    args: {
        iconRight: 'add',
        label: 'Tonal Button',
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
        iconRight: 'add',
        label: 'Tonal Button',
        type: 'button',
        variant: 'tonal'
    }
};
