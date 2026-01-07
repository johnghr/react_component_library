import { useState } from 'react';
import { joinClassNames } from '@/helpers/joinClassNames';
import { IconKey, Icon } from '@/components/_Icon/Icon';
import { Button } from '@/components/Buttons/Button';
import { ChildrenOrContent } from '@/types/ChildrenOrContent';
import './Accordion.scss';

export type AccordionProps = ChildrenOrContent<AccordionBaseProps>;

export type AccordionBaseProps = {
    defaultOpen?: boolean;
    headingLevel: 'h2' | 'h3' | 'h4';
    label: string;
    leadingIcon?: IconKey;
    iconFilled?: boolean;
};

export const Accordion = ({ children, content, defaultOpen = false, headingLevel, iconFilled, label, leadingIcon }: AccordionProps) => {
    const [open, setOpen] = useState(defaultOpen);

    const handleToggle = () => setOpen(!open);

    const HeadingTag = headingLevel;

    return (
        <div className="accordion">
            <HeadingTag>
                <Button
                    className="accordion__trigger"
                    data-testid="accordion-trigger"
                    onClick={handleToggle}
                    aria-expanded={open}
                    aria-controls="accordion-content"
                    label={label}
                    id="accordion-trigger"
                >
                    {leadingIcon && (
                        <Icon
                            className="accordion__trigger__leading-icon"
                            icon={leadingIcon}
                            filled={iconFilled}
                            data-testid="accordion-trigger-leading-icon"
                        />
                    )}
                    {label}
                    <Icon
                        className={joinClassNames(['accordion__trigger__arrow-icon', open && 'accordion__trigger__arrow-icon--up'])}
                        icon="arrowDropDown"
                        data-testid="accordion-trigger-arrow-icon"
                    />
                </Button>
            </HeadingTag>

            <div
                id="accordion-content"
                data-testid="accordion-content"
                aria-labelledby="accordion-trigger"
                className={open ? 'accordion__content' : 'hidden'}
            >
                {children || content}
            </div>
        </div>
    );
};
