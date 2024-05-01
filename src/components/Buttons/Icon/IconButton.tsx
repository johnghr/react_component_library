import './IconButton.scss';
import { Icon, IconProps } from '../../Icon/Icon';
import { joinClassNames } from '../../../helpers/joinClassNames';
import { Button, ButtonProps } from '../Button';
import { forwardRef } from 'react';

export interface IconButtonProps extends ButtonProps {
    icon: IconProps['name'];
    label: string;
    selected?: boolean;
    tooltip: string;
    variant: 'filled' | 'outlined' | 'standard' | 'tonal';
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ disabled, icon, label, selected, tooltip, variant, onClick }, ref) => {
    const className = joinClassNames(['button', 'icon-button', `icon-button--${variant}`, selected && 'icon-button--selected']);
    return (
        <Button aria-label={label} {...{ className, disabled, onClick, ref, title: tooltip }}>
            <Icon {...{ className: `icon-button__icon icon-button__icon--${variant}`, name: icon }} />
        </Button>
    );
});

IconButton.displayName = 'IconButton';
