import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'elevated' | 'filled' | 'outlined' | 'text' | 'tonal';

export interface BaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
}
