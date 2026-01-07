import { joinClassNames } from '@/helpers/joinClassNames';
import './Button.scss';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export type ButtonPropsWithRef = { props: ButtonProps; ref: React.ForwardedRef<HTMLButtonElement> };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, label, ...props }, ref) => {
    return (
        <button {...{ ...props, ref }} aria-label={label} className={joinClassNames(['button', className])}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';
