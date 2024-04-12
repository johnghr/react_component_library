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

export const Button = ({ color, disabled, size = 'medium', text, type, variant, onClick }: ButtonProps) => {
    const className = ['button', `button--${color}`, `button--${size}`, `button--${variant}`].join(' ');
    return <button {...{ className, disabled, type, onClick }}>{text}</button>;
};
