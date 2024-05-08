import { joinClassNames } from '@/helpers/joinClassNames';

export const SvgBase: React.FC<React.SVGProps<SVGSVGElement>> = ({
    className,
    children,
    height = '24',
    width = '24',
    viewBox = '0 -960 960 960',
    ...props
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg data-testid="icon" {...{ className: joinClassNames(['icon', className]), height, viewBox, width, ...props }}>
            {children}
        </svg>
    );
};
