import { joinClassNames } from '@/helpers/joinClassNames';
import { IconBaseProps } from '../Icon';
import { SvgBase } from './_SvgBase';

export const BarChartIcon: React.FC<IconBaseProps> = ({ className, filled, ...props }: IconBaseProps) => {
    return (
        <SvgBase {...{ ...props, className: joinClassNames(['icon', className]) }}>
            {filled ? (
                <path d="M80-120v-480h220v480H80Zm290 0v-720h220v720H370Zm290 0v-400h220v400H660Z" />
            ) : (
                <path d="M160-200h160v-320H160v320Zm240 0h160v-560H400v560Zm240 0h160v-240H640v240ZM80-120v-480h240v-240h320v320h240v400H80Z" />
            )}
        </SvgBase>
    );
};
