import './NavigationLink.scss';
import { Icon, IconKey } from '@/components/_Icon/Icon';
import { NavLinkProps as RouterNavLinkProps, LinkProps as RouterLinkProps } from 'react-router-dom';
import React, { forwardRef } from 'react';
import { joinClassNames } from '@/helpers/joinClassNames';

export interface NavigationLinkBaseProps {
    accordionLink?: boolean;
    iconFilled?: boolean;
    label: string;
    leadingIcon: IconKey;
}

export type NavigationLinkProps =
    | ({
          linkElement: 'a';
          href: string;
          to?: never;
      } & NavigationLinkBaseProps)
    | ({
          linkElement:
              | React.ForwardRefExoticComponent<RouterNavLinkProps & React.RefAttributes<HTMLAnchorElement>>
              | React.ForwardRefExoticComponent<RouterLinkProps & React.RefAttributes<HTMLAnchorElement>>;
          href?: never;
      } & NavigationLinkBaseProps &
          RouterNavLinkProps);

export const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(
    ({ accordionLink, iconFilled, label, leadingIcon, linkElement, to, ...props }, ref) => {
        const LinkElement = linkElement;
        return (
            <LinkElement {...props} ref={ref} className={joinClassNames(['navigation-link', accordionLink && 'navigation-link--accordion'])} to={to!}>
                <Icon className="navigation-link__leading-icon" filled={iconFilled} icon={leadingIcon} data-testid="navigation-link-leading-icon" />
                {label}
            </LinkElement>
        );
    }
);

NavigationLink.displayName = 'NavLink';
