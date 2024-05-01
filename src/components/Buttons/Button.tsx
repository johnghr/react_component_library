import { ButtonHTMLAttributes, forwardRef } from 'react';
import './Button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}

export type ButtonPropsWithRef = { props: ButtonProps; ref: React.ForwardedRef<HTMLButtonElement> };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, disabled, title, type, onClick }, ref) => {
    return (
        <button data-testid="button" {...{ className, disabled, ref, title, type, onClick }}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';
