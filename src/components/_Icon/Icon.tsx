import { AddIcon } from './Icons/AddIcon';
import { CloseIcon } from './Icons/CloseIcon';
import { EditIcon } from './Icons/EditIcon';
import { FavouriteIcon } from './Icons/FavouriteIcon';
import { SearchIcon } from './Icons/SearchIcon';
import { SettingsIcon } from './Icons/SettingsIcon';
import { FilterIcon } from './Icons/FilterIcon';
import { ArrowDropDownIcon } from './Icons/ArrowDropDownIcon';
import { ArrowDropUpIcon } from './Icons/ArrowDropUpIcon';
import { UsersIcon } from './Icons/UsersIcon';
import { HomeIcon } from './Icons/HomeIcon';
import { DeletedUserIcon } from './Icons/DeletedUserIcon';
import { BarChartIcon } from './Icons/BarChartIcon';
import { ManageUsersIcon } from './Icons/ManageUsersIcon';
import { SignOutIcon } from './Icons/SignOutIcon';

export interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
    filled?: boolean;
}

export interface IconProps extends IconBaseProps {
    icon: IconKey;
}

const iconComponents = {
    add: AddIcon,
    arrowDropDown: ArrowDropDownIcon,
    arrowDropUp: ArrowDropUpIcon,
    barChart: BarChartIcon,
    close: CloseIcon,
    deletedUser: DeletedUserIcon,
    edit: EditIcon,
    favourite: FavouriteIcon,
    filter: FilterIcon,
    home: HomeIcon,
    manageUsers: ManageUsersIcon,
    search: SearchIcon,
    settings: SettingsIcon,
    signOut: SignOutIcon,
    users: UsersIcon
} as const;

export const iconKeys = Object.keys(iconComponents);

export type IconKey = keyof typeof iconComponents;

export const Icon = ({ icon, ...props }: IconProps) => {
    const IconComponent = iconComponents[icon];

    return <IconComponent {...{ ...props }} />;
};
