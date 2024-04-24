import { AddIcon } from './AddIcon/AddIcon';

export interface IconProps {
    name: 'add';
}

const iconComponents: { [key in IconProps['name']]: React.FC } = {
    add: AddIcon
};

export const Icon = ({ name }: IconProps) => {
    const IconComponent = iconComponents[name];
    if (!IconComponent) {
        return <div data-testid="icon-error">Icon "{name}" does not exist</div>;
    }
    return <IconComponent />;
};
