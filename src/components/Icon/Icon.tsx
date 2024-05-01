import { joinClassNames } from '../../helpers/joinClassNames';
import { AddIcon } from './AddIcon/AddIcon';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: 'add';
}

const iconComponents: { [key in IconProps['name']]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    add: AddIcon
};

export const Icon = ({ className, focusable, name }: IconProps) => {
    const IconComponent = iconComponents[name];

    if (!IconComponent) {
        console.log(`Icon ${name} does not exist`);
    }

    return <IconComponent data-testid="icon" {...{ className: joinClassNames([`${name}-icon`, className]), focusable }} />;
};
