import './Fab.scss';
import { Icon, IconKey } from '@/components/_Icon/Icon';
import { joinClassNames } from '@/helpers/joinClassNames';
import { Button, ButtonProps } from '@/components/Buttons/Button';
import { forwardRef } from 'react';
import { FabColor } from '../Fab/Fab';

export interface FabProps extends ButtonProps {
    color?: FabColor;
    disabled?: never;
    icon: IconKey;
    label: string;
    lowered?: boolean;
    tooltip: string;
}

export const Fab = forwardRef<HTMLButtonElement, FabProps>(({ color = 'primary', icon, label, lowered, tooltip, ...props }, ref) => {
    const className = joinClassNames(['button', 'fab', `fab--${color}`, lowered && `fab--lowered`]);
    return (
        <Button {...{ className, label, ref, title: tooltip, ...props }}>
            <Icon {...{ className: 'fab__icon', focusable: false, icon }} />
            {label}
        </Button>
    );
});

Fab.displayName = 'Fab';
