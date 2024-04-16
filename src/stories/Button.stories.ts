import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components/Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        color: { control: 'radio', options: ['primary', 'secondary', 'tertiary'] }
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'filled'
    }
};

export const PrimaryFilledHovered: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        // Toggles the component hover state via parameter.
        pseudo: { hover: true }
    }
};

export const PrimaryFilledActive: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        // Toggles the component hover state via parameter.
        pseudo: { active: true }
    }
};

export const PrimaryFilledFocused: Story = {
    args: {
        color: 'primary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'filled'
    },
    parameters: {
        // Toggles the component hover state via parameter.
        pseudo: { focus: true }
    }
};

export const Secondary: Story = {
    args: {
        color: 'secondary',
        disabled: false,
        text: 'Label',
        type: 'button',
        variant: 'outlined'
    }
};

// export const Secondary: Story = {
//     args: {
//         color: 'secondary',
//         text: 'Button',
//         type: 'button',
//         variant: 'filled'
//     }
// };
// export const Large: Story = {
//     args: {
//         size: 'large',
//         label: 'Button'
//     }
// };

// export const Small: Story = {
//     args: {
//         size: 'small',
//         label: 'Button'
//     }
// };

// export const Warning: Story = {
//     args: {
//         primary: true,
//         label: 'Delete now',
//         backgroundColor: 'red'
//     }
// };
