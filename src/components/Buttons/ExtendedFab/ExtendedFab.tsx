import './ExtendedFab.scss';
import { Icon, IconKey } from '@/components/_Icon/Icon';
import { joinClassNames } from '@/helpers/joinClassNames';
import { Button, ButtonProps } from '@/components/Buttons/Button';
import { forwardRef } from 'react';
import { FabColor } from '../Fab/Fab';

export interface ExtendedFabProps extends ButtonProps {
    color?: FabColor;
    disabled?: never;
    icon?: IconKey;
    label: string;
    lowered?: boolean;
    tooltip: string;
}

export const ExtendedFab = forwardRef<HTMLButtonElement, ExtendedFabProps>(({ color = 'primary', icon, label, lowered, tooltip, ...props }, ref) => {
    const className = joinClassNames(['button', 'extended-fab', `extended-fab--${color}`, lowered && `extended-fab--lowered`]);
    return (
        <Button {...{ className, label, ref, title: tooltip, ...props }} data-testid="extended-fab">
            {icon && <Icon {...{ className: 'extended-fab__icon', focusable: false, icon }} data-testid="extended-fab__icon" />}
            {label}
        </Button>
    );
});

ExtendedFab.displayName = 'Fab';
