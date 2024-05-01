import { forwardRef } from 'react';
import './CommonButton.scss';
import { Icon, IconProps } from '../../Icon/Icon';
import { joinClassNames } from '../../../helpers/joinClassNames';
import { Button, ButtonProps } from '../Button';

export interface CommonButtonProps extends ButtonProps {
    iconLeft?: IconProps['name'];
    iconRight?: IconProps['name'];
    variant: 'elevated' | 'filled' | 'outlined' | 'label' | 'tonal';
}

export const CommonButton = forwardRef<HTMLButtonElement, CommonButtonProps>(
    ({ disabled, iconLeft, iconRight, label, type, variant, onClick }, ref) => {
        const buttonClassName = joinClassNames([
            'button',
            'common-button',
            `common-button--${variant}`,
            iconLeft && 'common-button--icon-left',
            iconRight && 'common-button--icon-right'
        ]);

        const IconLeft = iconLeft && (
            <Icon aria-hidden="true" data-testid="left-icon" {...{ className: 'common-button__icon common-button__icon--left', name: iconLeft }} />
        );
        const IconRight = iconRight && (
            <Icon aria-hidden="true" data-testid="right-icon" {...{ className: 'common-button__icon common-button__icon--right', name: iconRight }} />
        );
        return (
            <Button data-testid="common-button" {...{ className: buttonClassName, disabled, ref, type, onClick }}>
                {IconLeft}
                {label}
                {IconRight}
            </Button>
        );
    }
);

CommonButton.displayName = 'Button';
