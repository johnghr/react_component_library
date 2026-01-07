import React from 'react';
import './Drawer.scss';
import { joinClassNames } from '@/helpers/joinClassNames';
import { ChildrenOrContent } from '@/types/ChildrenOrContent';

export interface DrawerBaseProps {
    className?: string;
    element: 'section' | 'nav';
    label: string;
    open?: boolean;
    withHeadline?: boolean;
}

export type DrawerProps = ChildrenOrContent<DrawerBaseProps>;

export const Drawer: React.FC<DrawerProps> = ({ className, children, content, element = 'section', label, open = true, withHeadline }) => {
    const Element = element;
    return (
        <Element
            aria-labelledby="drawer-headline"
            className={open ? joinClassNames(['drawer', className]) : 'hidden'}
            role={element === 'section' ? 'region' : undefined}
        >
            <h2 id="drawer-headline" className={withHeadline ? 'drawer__headline' : 'sr-only'}>
                {label}
            </h2>
            {children || content}
        </Element>
    );
};
