import { AddIcon } from './AddIcon/AddIcon';

export interface IconProps {
    className?: string;
    name: 'add';
}

const iconComponents: { [key in IconProps['name']]: React.FC<{ className?: string }> } = {
    add: AddIcon
};

export const Icon = ({ className, name }: IconProps) => {
    const IconComponent = iconComponents[name];
    if (!IconComponent) {
        console.log(`Icon ${name} does not exist`);
    }
    return <IconComponent {...{ className }} />;
};
