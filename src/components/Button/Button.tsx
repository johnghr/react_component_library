import { ButtonHTMLAttributes, forwardRef } from 'react';
import './button.scss';
import { Icon, IconProps } from '../Icon/Icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconLeft?: IconProps['name'];
    iconRight?: IconProps['name'];
    text: string;
    variant: 'elevated' | 'filled' | 'outlined' | 'text' | 'tonal';
}

export const Button = forwardRef(
    ({ disabled, iconLeft, iconRight, text, type, variant, onClick }: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
        const buttonClassName = ['button', `button--${variant}`, iconLeft ? 'button--icon-left' : '', iconRight ? 'button--icon-right' : ''].join(
            ' '
        );
        const iconLeftClassName = ['button__icon', 'button__icon--left', `button__icon--${variant}`].join(' ');
        const iconRightClassName = ['button__icon', 'button__icon--right', `button__icon--${variant}`].join(' ');

        return (
            <button data-testid="button" {...{ className: buttonClassName, disabled, ref, type, onClick }}>
                {iconLeft && <Icon data-testid="left-icon" {...{ className: iconLeftClassName, name: iconLeft }} />}
                {text}
                {iconRight && <Icon data-testid="right-icon" {...{ className: iconRightClassName, name: iconRight }} />}
            </button>
        );
    }
);

Button.displayName = 'Button';
