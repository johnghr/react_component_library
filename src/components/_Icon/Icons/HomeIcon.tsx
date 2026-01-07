import { joinClassNames } from '@/helpers/joinClassNames';
import { IconBaseProps } from '../Icon';
import { SvgBase } from './_SvgBase';

export const HomeIcon: React.FC<IconBaseProps> = ({ className, filled, ...props }: IconBaseProps) => {
    return (
        <SvgBase {...{ ...props, className: joinClassNames(['icon', className]) }}>
            {filled ? (
                <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
            ) : (
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            )}
        </SvgBase>
    );
};
