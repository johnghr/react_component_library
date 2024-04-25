export const AddIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }: { className?: string }) => {
    const iconClassName = ['icon', className].join(' ');
    return (
        <svg {...{ className: iconClassName }} data-testid="add-icon" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
    );
};
