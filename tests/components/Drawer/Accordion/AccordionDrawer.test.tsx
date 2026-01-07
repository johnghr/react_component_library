import { render, screen } from '@testing-library/react';
import { AccordionDrawer, AccordionDrawerProps } from '@/components/Drawer/Accordion/AccordionDrawer';
import { Accordion, AccordionProps } from '@/components/Drawer/Accordion/Accordion';
import { describe, expect, it } from 'vitest';

describe('AccordionDrawer component', () => {
    const testAccordions: AccordionProps[] = [
        { content: 'Test content', headingLevel: 'h2', label: 'Accordion 1' },
        { content: 'Test content', headingLevel: 'h2', label: 'Accordion 2' }
    ];

    const testProps: AccordionDrawerProps = {
        accordions: testAccordions,
        label: 'Accordion Drawer',
        withHeadline: true
    };

    it('renders the drawer with accordions', () => {
        render(<AccordionDrawer {...testProps} />);

        const drawerLabel = screen.getByText('Accordion Drawer');
        expect(drawerLabel).toBeInTheDocument();

        const accordionOne = screen.getByText('Accordion 1');
        const accordionTwo = screen.getByText('Accordion 2');
        expect(accordionOne).toBeInTheDocument();
        expect(accordionTwo).toBeInTheDocument();
    });

    it('renders the drawer correctly when children are provided', () => {
        render(
            <AccordionDrawer accordions={undefined} label="Drawer Label" withHeadline>
                <Accordion content="" label="Test One" headingLevel="h3" />
                <Accordion content="" label="Test Two" headingLevel="h3" />
            </AccordionDrawer>
        );

        const accordionOne = screen.getByText('Test One');
        const accordionTwo = screen.getByText('Test Two');

        expect(accordionOne).toBeInTheDocument();
        expect(accordionTwo).toBeInTheDocument();
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<AccordionDrawer {...testProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
