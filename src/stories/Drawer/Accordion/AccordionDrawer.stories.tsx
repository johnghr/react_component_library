import type { Meta, StoryObj } from '@storybook/react';
import { AccordionDrawer } from '@/components/Drawer/Accordion/AccordionDrawer';
import { Accordion } from '@/components/Drawer/Accordion/Accordion';
import { Accordion as AccordionStory } from './Accordion.stories';

const meta: Meta<typeof AccordionDrawer> = {
    title: 'Drawers/Accordion/AccordionDrawer',
    component: AccordionDrawer,
    argTypes: {
        label: {
            control: { type: 'text' }
        },
        withHeadline: {
            control: { type: 'boolean' }
        }
    }
};

export default meta;

type Story = StoryObj<typeof AccordionDrawer>;

const AccordionDrawerTemplate: Story = {
    render: ({ accordions, children, ...args }) => {
        return accordions ? (
            <AccordionDrawer {...{ ...args, accordions }}></AccordionDrawer>
        ) : (
            <AccordionDrawer {...args}>{children}</AccordionDrawer>
        );
    }
};

const children = (
    <>
        <Accordion {...AccordionStory.args}></Accordion>
        <Accordion {...AccordionStory.args}></Accordion>
        <Accordion {...AccordionStory.args}></Accordion>
        <Accordion {...AccordionStory.args}></Accordion>
        <Accordion {...AccordionStory.args}></Accordion>
    </>
);

export const WithAccordionArray = {
    ...AccordionDrawerTemplate,
    args: {
        accordions: [{ ...AccordionStory.args }, { ...AccordionStory.args }, { ...AccordionStory.args }, { ...AccordionStory.args }],
        label: 'Photo filters',
        withHeadline: true
    }
};

export const WithChildren = {
    ...AccordionDrawerTemplate,
    args: {
        children,
        label: 'Video filters',
        withHeadline: true
    }
};
