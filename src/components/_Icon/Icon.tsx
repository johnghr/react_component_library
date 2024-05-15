import { AddIcon } from './Icons/AddIcon';
import { FavouriteIcon } from './Icons/FavouriteIcon';
import { SettingsIcon } from './Icons/SettingsIcon';

export interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
    filled?: boolean;
}

export interface IconProps extends IconBaseProps {
    icon: Icons;
}

const iconComponents = {
    add: AddIcon,
    favourite: FavouriteIcon,
    settings: SettingsIcon
};

export type Icons = keyof typeof iconComponents;

export const Icon = ({ icon, ...props }: IconProps) => {
    const IconComponent = iconComponents[icon];

    if (!IconComponent) {
        console.log(`Icon ${icon} does not exist`);
    }

    return <IconComponent {...{ ...props }} />;
};
