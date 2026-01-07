import type { Meta, StoryObj } from '@storybook/react';
import { CommonButton as CommonButtonComponent, commonButtonVariants } from '@/components/Buttons/Common/CommonButton';
import { iconKeys } from '@/components/_Icon/Icon';

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
            options: [undefined, ...iconKeys],
            control: { type: 'select' }
        },
        iconRight: {
            options: [undefined, ...iconKeys],
            control: { type: 'select' }
        },
        variant: {
            options: commonButtonVariants,
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
