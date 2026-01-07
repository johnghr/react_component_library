import { joinClassNames } from '@/helpers/joinClassNames';
import { IconBaseProps } from '../Icon';
import { SvgBase } from './_SvgBase';

export const CloseIcon: React.FC<IconBaseProps> = ({ className, ...props }: Omit<IconBaseProps, 'filled'>) => {
    return (
        <SvgBase {...{ ...props, className: joinClassNames(['icon', className]) }}>
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </SvgBase>
    );
};
