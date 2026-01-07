import type { Meta, StoryObj } from '@storybook/react';
import { iconKeys } from '@/components/_Icon/Icon';
import { ExtendedFab as ExtendedFabComponent } from '@/components/Buttons/ExtendedFab/ExtendedFab';
import { fabColors } from '@/components/Buttons/Fab/Fab';

const meta = {
    title: 'Buttons/ExtendedFAB',
    component: ExtendedFabComponent,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        color: {
            options: fabColors,
            control: { type: 'select' }
        },
        icon: {
            options: [undefined, ...iconKeys],
            control: { type: 'select' }
        },
        lowered: {
            options: [true, false],
            control: { type: 'radio' }
        },
        type: { options: ['button', 'submit'], control: { type: 'radio' } }
    }
} satisfies Meta<typeof ExtendedFabComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExtendedFAB: Story = {
    args: {
        icon: 'edit',
        label: 'Edit',
        tooltip: 'Edit item',
        type: 'button'
    }
};
