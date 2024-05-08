import { AddIcon } from './Icons/AddIcon';
import { FavouriteIcon } from './Icons/FavouriteIcon';

export interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
    filled?: boolean;
}

export interface IconProps extends IconBaseProps {
    name: Icons;
}

const iconComponents = {
    add: AddIcon,
    favourite: FavouriteIcon
};

export type Icons = keyof typeof iconComponents;

export const Icon = ({ name, ...props }: IconProps) => {
    const IconComponent = iconComponents[name];

    if (!IconComponent) {
        console.log(`Icon ${name} does not exist`);
    }

    return <IconComponent {...{ ...props }} />;
};
