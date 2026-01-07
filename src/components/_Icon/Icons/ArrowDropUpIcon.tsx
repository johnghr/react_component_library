import { joinClassNames } from '@/helpers/joinClassNames';
import { IconBaseProps } from '../Icon';
import { SvgBase } from './_SvgBase';

export const ArrowDropUpIcon: React.FC<IconBaseProps> = ({ className, ...props }: Omit<IconBaseProps, 'filled'>) => {
    return (
        <SvgBase {...{ ...props, className: joinClassNames(['icon', className]) }}>
            <path d="m280-400 200-200 200 200H280Z" />
        </SvgBase>
    );
};
