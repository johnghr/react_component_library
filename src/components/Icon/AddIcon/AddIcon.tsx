import { joinClassNames } from '../../../helpers/joinClassNames';

export const AddIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, focusable }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg data-testid="icon" height="24" viewBox="0 -960 960 960" width="24" {...{ className: joinClassNames(['icon', className]), focusable }}>
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
    );
};
