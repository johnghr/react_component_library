import type { Meta, StoryObj } from '@storybook/react';
import { iconKeys } from '@/components/_Icon/Icon';
import { fabColors, Fab as FabComponent, fabSizes } from '@/components/Buttons/Fab/Fab';

const meta = {
    title: 'Buttons/FAB',
    component: FabComponent,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        color: {
            options: fabColors,
            control: { type: 'select' }
        },
        icon: {
            options: iconKeys,
            control: { type: 'select' }
        },
        lowered: {
            options: [true, false],
            control: { type: 'radio' }
        },
        size: {
            options: fabSizes,
            control: { type: 'select' }
        },
        type: { options: ['button', 'submit'], control: { type: 'radio' } }
    }
} satisfies Meta<typeof FabComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fab: Story = {
    args: {
        icon: 'edit',
        label: 'edit',
        tooltip: 'Edit item',
        type: 'button'
    }
};
