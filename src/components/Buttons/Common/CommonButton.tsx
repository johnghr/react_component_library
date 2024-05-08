import { forwardRef } from 'react';
import { Icon, Icons } from '@/components/_Icon/Icon';
import { joinClassNames } from '@/helpers/joinClassNames';
import { Button, ButtonProps } from '../Button';
import './CommonButton.scss';

export interface CommonButtonProps extends ButtonProps {
    iconLeft?: Icons;
    iconRight?: Icons;
    variant: 'elevated' | 'filled' | 'outlined' | 'label' | 'text' | 'tonal';
}

export const CommonButton = forwardRef<HTMLButtonElement, CommonButtonProps>(({ iconLeft, iconRight, label, variant, ...props }, ref) => {
    const buttonClassName = joinClassNames([
        'button',
        'common-button',
        `common-button--${variant}`,
        iconLeft && 'common-button--icon-left',
        iconRight && 'common-button--icon-right'
    ]);

    const IconLeft = iconLeft && <Icon aria-hidden="true" {...{ className: 'common-button__icon common-button__icon--left', name: iconLeft }} />;
    const IconRight = iconRight && <Icon aria-hidden="true" {...{ className: 'common-button__icon common-button__icon--right', name: iconRight }} />;
    return (
        <Button {...{ className: buttonClassName, label, ref, ...props }}>
            {IconLeft}
            {label}
            {IconRight}
        </Button>
    );
});

CommonButton.displayName = 'Button';
