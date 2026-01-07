import { joinClassNames } from '@/helpers/joinClassNames';
import { IconBaseProps } from '../Icon';
import { SvgBase } from './_SvgBase';

export const FilterIcon: React.FC<IconBaseProps> = ({ className, ...props }: Omit<IconBaseProps, 'filled'>) => {
    return (
        <SvgBase {...{ ...props, className: joinClassNames(['icon', className]) }}>
            <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
        </SvgBase>
    );
};
