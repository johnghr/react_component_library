import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components/Button/Button';
import { withKnobs } from '@storybook/addon-knobs';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        color: { control: 'color' },
        size: { control: 'string' }
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
        text: 'Button',
        type: 'button',
        variant: 'filled'
    }
};

export const Secondary: Story = {
    args: {
        color: 'secondary',
        text: 'Button',
        type: 'button',
        variant: 'filled'
    }
};
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
