import './Fab.scss';
import { Icon, IconKey } from '@/components/_Icon/Icon';
import { joinClassNames } from '@/helpers/joinClassNames';
import { Button, ButtonProps } from '@/components/Buttons/Button';
import { forwardRef } from 'react';

export const fabColors = ['primary', 'surface', 'secondary', 'tertiary'] as const;

export type FabColor = (typeof fabColors)[number];

export const fabSizes = [undefined, 'small', 'large'] as const;

export type FabSize = (typeof fabSizes)[number];

interface FabProps extends ButtonProps {
    color?: FabColor;
    disabled?: never;
    icon: IconKey;
    label: string;
    lowered?: boolean;
    tooltip: string;
    size?: 'small' | 'large';
}

export const Fab = forwardRef<HTMLButtonElement, FabProps>(({ color = 'primary', icon, label, lowered, size, tooltip, ...props }, ref) => {
    const className = joinClassNames(['button', 'fab', `fab--${color}`, lowered && `fab--lowered`, size && `fab--${size}`]);
    const iconSize = size === 'large' ? 36 : undefined;
    return (
        <Button {...{ className, label, ref, title: tooltip, ...props }}>
            <Icon {...{ className: 'fab__icon', focusable: false, height: iconSize, icon, width: iconSize }} />
        </Button>
    );
});

Fab.displayName = 'Fab';
