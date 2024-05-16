import './IconButton.scss';
import { Icon, IconKey } from '@/components/_Icon/Icon';
import { joinClassNames } from '@/helpers/joinClassNames';
import { Button, ButtonProps } from '@/components/Buttons/Button';
import { forwardRef } from 'react';

export const iconButtonVariants = ['filled', 'outlined', 'standard', 'tonal'] as const;

export type IconButtonVariant = (typeof iconButtonVariants)[number];

interface IconButtonBase extends ButtonProps {
    icon: IconKey;
    label: string;
    tooltip: string;
    variant: IconButtonVariant;
}

export type IconButtonProps =
    | (IconButtonBase & {
          selected?: never;
          toggle?: false | undefined;
      })
    | (IconButtonBase & {
          selected: boolean;
          toggle: true;
      });

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ icon, label, selected, toggle, tooltip, variant, ...props }, ref) => {
    const className = joinClassNames([
        'button',
        'icon-button',
        `icon-button--${variant}`,
        selected ? 'icon-button--selected' : 'icon-button--unselected',
        toggle && 'icon-button--toggle'
    ]);

    return (
        <Button {...{ ['aria-checked']: selected, className, label, ref, role: toggle ? 'switch' : 'button', title: tooltip, ...props }}>
            <Icon {...{ className: 'icon-button__icon', filled: selected, focusable: false, icon }} />
        </Button>
    );
});

IconButton.displayName = 'IconButton';
