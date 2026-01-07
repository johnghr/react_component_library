import { IconBaseProps } from '../Icon';
import { SvgBase } from './_SvgBase';

export const AddIcon: React.FC<IconBaseProps> = ({ className, ...props }: Omit<IconBaseProps, 'filled'>) => {
    return (
        <SvgBase {...{ ...props, className }}>
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </SvgBase>
    );
};
