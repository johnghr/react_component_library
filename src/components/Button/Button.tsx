import { forwardRef } from 'react';
import './button.scss';

export interface ButtonProps {
    color: 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'error';
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    text: string;
    type: 'button' | 'submit';
    variant: 'elevated' | 'filled' | 'outlined' | 'text' | 'tonal';
    onClick?: () => void;
}

export const Button = forwardRef(
    ({ color = 'primary', disabled, size = 'medium', text, type, variant, onClick }: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
        const className = ['button', `button--${color}`, `button--${size}`, `button--${variant}`].join(' ');
        return (
            <button data-testid="button" {...{ className, disabled, ref, type, onClick }}>
                {text}
            </button>
        );
    }
);
