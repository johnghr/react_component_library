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
        return <div data-testid="icon-error">Icon "{name}" does not exist</div>;
    }
    return <IconComponent {...{ className }} />;
};
