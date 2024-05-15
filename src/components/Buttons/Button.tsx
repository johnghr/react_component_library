import './Button.scss';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export type ButtonPropsWithRef = { props: ButtonProps; ref: React.ForwardedRef<HTMLButtonElement> };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, label, ...props }, ref) => {
    return (
        <button aria-label={label} data-testid="button" {...{ ...props, ref }}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';
