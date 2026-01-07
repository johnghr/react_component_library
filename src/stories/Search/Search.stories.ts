import type { Meta, StoryObj } from '@storybook/react';
import { Search as SearchComponent } from '@/components/Search/Search';

const meta = {
    title: 'Search/Search',
    component: SearchComponent,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        placeholder: {
            control: { type: 'text' }
        }
    }
} satisfies Meta<typeof SearchComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Search: Story = {
    args: {
        ariaLabel: 'A descriptive explanation of what the search is i.e User search or Media search etc',
        handleSearch: () => console.log('test')
    }
};
