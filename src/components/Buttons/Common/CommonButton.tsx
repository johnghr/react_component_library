import './CommonButton.scss';
import { forwardRef } from 'react';
import { Icon, IconKey } from '@/components/_Icon/Icon';
import { joinClassNames } from '@/helpers/joinClassNames';
import { Button, ButtonProps } from '../Button';

export const commonButtonVariants = ['elevated', 'filled', 'outlined', 'text', 'tonal'] as const;

export type CommonButtonVariant = (typeof commonButtonVariants)[number];

export interface CommonButtonProps extends ButtonProps {
    fullWidth?: boolean;
    iconLeft?: IconKey;
    iconRight?: IconKey;
    variant: CommonButtonVariant;
}

export const CommonButton = forwardRef<HTMLButtonElement, CommonButtonProps>(({ fullWidth, iconLeft, iconRight, label, variant, ...props }, ref) => {
    const buttonClassName = joinClassNames([
        'button',
        'common-button',
        `common-button--${variant}`,
        iconLeft && 'common-button--icon-left',
        iconRight && 'common-button--icon-right',
        fullWidth && 'common-button--full-width'
    ]);

    const IconLeft = iconLeft && (
        <Icon {...{ className: 'common-button__icon common-button__icon--left', icon: iconLeft }} data-testid="common-button__icon--left" />
    );
    const IconRight = iconRight && (
        <Icon {...{ className: 'common-button__icon common-button__icon--right', icon: iconRight }} data-testid="common-button__icon--right" />
    );
    return (
        <Button {...{ ...props, className: buttonClassName, label, ref }}>
            {IconLeft}
            {label}
            {IconRight}
        </Button>
    );
});

CommonButton.displayName = 'Button';
