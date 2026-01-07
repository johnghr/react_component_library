import { Drawer, DrawerBaseProps } from '../Drawer';
import { NavigationLink, NavigationLinkProps } from './NavigationLink';
import { NavigationAccordion, NavigationAccordionProps } from './NavigationAccordion';
import { ChildrenOrContentConfig } from '@/types/ChildrenOrContentConfig';

export type NavigationDrawerChild = 'accordion' | 'link';

export type NavigationDrawerProps = ChildrenOrContentConfig<
    Omit<DrawerBaseProps, 'element'>,
    { type: 'accordion'; props: NavigationAccordionProps } | { type: 'link'; props: NavigationLinkProps }
>;

export const NavigationDrawer = ({ children, content, ...props }: NavigationDrawerProps) => {
    return (
        <Drawer {...props} element="nav" className="navigation-drawer">
            {children ||
                content?.map(({ type, props }, index) =>
                    type === 'accordion' ? <NavigationAccordion key={index} {...props} /> : <NavigationLink key={index} {...props} />
                )}
        </Drawer>
    );
};
