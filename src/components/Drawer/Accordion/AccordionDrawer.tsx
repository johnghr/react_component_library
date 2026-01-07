import '../Drawer.scss';
import React, { ReactElement } from 'react';
import { Accordion, AccordionProps } from './Accordion';
import { Drawer, DrawerBaseProps } from '../Drawer';

export type AccordionDrawerProps =
    | ({
          children: ReactElement<AccordionProps>[];
          accordions?: never;
      } & Omit<DrawerBaseProps, 'element'>)
    | ({
          children?: never;
          accordions: AccordionProps[];
      } & Omit<DrawerBaseProps, 'element'>);

export const AccordionDrawer: React.FC<AccordionDrawerProps> = ({ accordions, children, label, withHeadline }) => {
    return (
        <Drawer {...{ element: 'section', label, withHeadline }}>
            {children || accordions?.map(({ ...props }, index) => <Accordion key={index} {...props} />)}
        </Drawer>
    );
};
