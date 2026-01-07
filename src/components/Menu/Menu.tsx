import { MenuItemProps } from './MenuItem';
import { ChildrenOrContent } from '@/types/ChildrenOrContent';

type MenuBaseProps = {
    label: string;
    open: boolean;
};

export type MenuProps = ChildrenOrContent<MenuBaseProps, MenuItemProps>;

export const Menu = ({ content, children, label, open }: MenuProps) => {
    return (
        <ul className={open ? 'menu' : 'hidden'} role="menubar" aria-label={label}>
            {children || content}
        </ul>
    );
};
