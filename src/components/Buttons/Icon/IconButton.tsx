import { Icon, IconProps } from '../../Icon/Icon';
import { BaseButton } from '../types/Button.types';

export interface IconButtonProps extends BaseButton {
    icon: IconProps['name'];
}

export const IconButton = ({ icon, variant }: IconButtonProps) => {
    const buttonClassName = ['button', `button--${variant}`].join(' ');
    return (
        <button {...{ className: buttonClassName }} data-testid="icon-button">
            <Icon data-testid="icon-button-icon" {...{ className: iconLeftClassName, name: icon }} />
        </button>
    );
};
