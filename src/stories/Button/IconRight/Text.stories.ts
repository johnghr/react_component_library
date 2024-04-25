import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../../components/Buttons/Common/CommonButton';

const meta = {
    title: 'Button/Text/IconRight',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        disabled: false,
        iconRight: 'add',
        text: 'Label',
        type: 'button',
        variant: 'text'
    }
};

export const TextHovered: Story = {
    args: {
        disabled: false,
        iconRight: 'add',
        text: 'Label',
        type: 'button',
        variant: 'text'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const TextActive: Story = {
    args: {
        disabled: false,
        iconRight: 'add',
        text: 'Label',
        type: 'button',
        variant: 'text'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const TextFocused: Story = {
    args: {
        disabled: false,
        iconRight: 'add',
        text: 'Label',
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
        iconRight: 'add',
        text: 'Label',
        type: 'button',
        variant: 'text'
    }
};
