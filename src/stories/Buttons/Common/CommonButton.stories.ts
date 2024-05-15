import type { Meta, StoryObj } from '@storybook/react';
import { CommonButton as CommonButtonComponent } from '@/components/Buttons/Common/CommonButton';

const meta = {
    title: 'Buttons/CommonButton',
    component: CommonButtonComponent,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        disabled: {
            options: [true, false],
            control: { type: 'radio' }
        },
        iconLeft: {
            options: ['add', 'favourite', 'settings'],
            control: { type: 'select' }
        },
        iconRight: {
            options: ['add', 'favourite', 'settings'],
            control: { type: 'select' }
        },
        variant: {
            options: ['elevated', 'filled', 'outlined', 'text', 'tonal'],
            control: { type: 'select' }
        }
    }
} satisfies Meta<typeof CommonButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CommonButton: Story = {
    args: {
        label: 'Common Button',
        type: 'button',
        variant: 'filled'
    }
};
