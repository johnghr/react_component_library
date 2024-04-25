import { forwardRef } from 'react';
import './CommonButton.scss';
import { Icon, IconProps } from '../../Icon/Icon';
import { BaseButton } from '../types/Button.types';

export interface CommonButtonProps extends BaseButton {
    iconLeft?: IconProps['name'];
    iconRight?: IconProps['name'];
    text: string;
}

export const CommonButton = forwardRef(
    ({ disabled, iconLeft, iconRight, text, type, variant, onClick }: CommonButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
        const buttonClassName = ['button', `button--${variant}`, iconLeft ? 'button--icon-left' : '', iconRight ? 'button--icon-right' : ''].join(
            ' '
        );

        return (
            <button data-testid="button" {...{ className: buttonClassName, disabled, ref, type, onClick }}>
                {iconLeft && <Icon data-testid="left-icon" {...{ className: 'button__icon button__icon--left', name: iconLeft }} />}
                {text}
                {iconRight && <Icon data-testid="right-icon" {...{ className: 'button__icon button__icon--right', name: iconRight }} />}
            </button>
        );
    }
);

CommonButton.displayName = 'Button';
