import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { IconButton } from '../../../../components/Buttons/Icon/IconButton';

const meta = {
    title: 'Buttons/IconButton/Tonal',
    component: IconButton,
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn() }
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tonal: Story = {
    args: {
        icon: 'favourite',
        label: 'favourite',
        tooltip: 'Add to favourite',
        type: 'button',
        variant: 'tonal'
    }
};

export const TonalHovered: Story = {
    args: {
        icon: 'favourite',
        label: 'favourite',
        tooltip: 'Add to favourite',
        type: 'button',
        variant: 'tonal'
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const TonalActive: Story = {
    args: {
        icon: 'favourite',
        label: 'favourite',
        tooltip: 'Add to favourite',
        type: 'button',
        variant: 'tonal'
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const TonalFocused: Story = {
    args: {
        icon: 'favourite',
        label: 'favourite',
        tooltip: 'Add to favourite',
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
        icon: 'favourite',
        label: 'favourite',
        tooltip: 'Add to favourite',
        type: 'button',
        variant: 'tonal'
    }
};
