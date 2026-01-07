import { joinClassNames } from '@/helpers/joinClassNames';

interface SvgBaseProps extends React.SVGProps<SVGSVGElement> {}

export const SvgBase: React.FC<SvgBaseProps> = ({
    'aria-hidden': ariaHidden = 'true',
    className,
    children,
    height = 24,
    width = 24,
    viewBox = '0 -960 960 960',
    ...props
}: SvgBaseProps) => {
    return (
        <svg
            {...{
                ...props,
                'aria-hidden': ariaHidden,
                className: joinClassNames(['icon', className]),
                height,
                viewBox,
                width
            }}
        >
            {children}
        </svg>
    );
};
