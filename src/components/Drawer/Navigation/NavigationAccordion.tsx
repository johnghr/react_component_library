import { Accordion, AccordionBaseProps } from '../Accordion/Accordion';
import { NavigationLink, NavigationLinkProps } from './NavigationLink';
import { ChildrenOrContentConfig } from '@/types/ChildrenOrContentConfig';

export type NavigationAccordionProps = ChildrenOrContentConfig<AccordionBaseProps, NavigationLinkProps>;

export const NavigationAccordion = ({ children, content, ...props }: NavigationAccordionProps) => {
    return <Accordion {...props}>{children || content?.map((props, index) => <NavigationLink key={index} {...props} accordionLink />)}</Accordion>;
};
