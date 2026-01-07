import { Button, ButtonProps } from '../Buttons/Button';

export interface MenuItemProps extends ButtonProps {}

export const MenuItem = ({ ...props }: MenuItemProps) => {
    return (
        <li role="none">
            <Button className="menu-item" {...props} role="menuitem" />
        </li>
    );
};
