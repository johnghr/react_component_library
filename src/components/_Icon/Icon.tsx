import { AddIcon } from './Icons/AddIcon';
import { EditIcon } from './Icons/EditIcon';
import { FavouriteIcon } from './Icons/FavouriteIcon';
import { SettingsIcon } from './Icons/SettingsIcon';

export interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
    filled?: boolean;
}

export interface IconProps extends IconBaseProps {
    icon: IconKey;
}

const iconComponents = {
    add: AddIcon,
    edit: EditIcon,
    favourite: FavouriteIcon,
    settings: SettingsIcon
} as const;

export const iconKeys = Object.keys(iconComponents);

export type IconKey = keyof typeof iconComponents;

export const Icon = ({ icon, ...props }: IconProps) => {
    const IconComponent = iconComponents[icon];

    if (!IconComponent) {
        console.log(`Icon ${icon} does not exist`);
    }

    return <IconComponent {...{ ...props }} />;
};
