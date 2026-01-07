import { joinClassNames } from '@/helpers/joinClassNames';
import { IconBaseProps } from '../Icon';
import { SvgBase } from './_SvgBase';

export const ArrowDropDownIcon: React.FC<IconBaseProps> = ({ className, ...props }: Omit<IconBaseProps, 'filled'>) => {
    return (
        <SvgBase {...{ ...props, className: joinClassNames(['icon', className]) }}>
            <path d="M480-360 280-560h400L480-360Z" />
        </SvgBase>
    );
};
