import { forwardRef } from 'react';
import './button.scss';
import { Icon, IconProps } from '../Icon/Icon';

export interface ButtonProps {
    color?: 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'error';
    disabled?: boolean;
    iconLeft?: IconProps['name'];
    iconRight?: IconProps['name'];
    text: string;
    type: 'button' | 'submit';
    variant: 'elevated' | 'filled' | 'outlined' | 'text' | 'tonal';
    onClick?: () => void;
}

export const Button = forwardRef(
    ({ color = 'primary', disabled, iconLeft, iconRight, text, type, variant, onClick }: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
        const buttonClassName = ['button', `button--${color}`, `button--${variant}`].join(' ');
        const iconClassName = [`button__icon--${color}`, `button__icon--${variant}`].join(' ');
        return (
            <button data-testid="button" {...{ className: buttonClassName, disabled, ref, type, onClick }}>
                {iconLeft && <Icon {...{ className: iconClassName, name: iconLeft }} />}
                {text}
                {iconRight && <Icon {...{ className: iconClassName, name: iconRight }} />}
            </button>
        );
    }
);
