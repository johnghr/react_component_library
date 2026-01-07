import './Search.scss';
import { Icon } from '../_Icon/Icon';
import { IconButton } from '../Buttons/Icon/IconButton';
import { InputHTMLAttributes, forwardRef, useImperativeHandle, useRef, useState } from 'react';

export interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    ariaLabel: string;
    caseSensitive?: boolean;
    handleSearch: (value: string) => void;
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(
    ({ ariaLabel, caseSensitive, defaultValue, placeholder, handleSearch, ...props }, ref) => {
        const [value, setValue] = useState(defaultValue ? String(defaultValue) : '');
        const searchRef = useRef<HTMLInputElement>(null);

        // This allows us to imperatively expose input methods (i.e. focus) to a parent via the ref provided by forward ref at the same time as using searchRef
        // to call those methods internally
        useImperativeHandle(ref, () => {
            return {
                focus() {
                    searchRef.current?.focus();
                }
            } as HTMLInputElement;
        }, []);

        return (
            <div className="search__container">
                <Icon className="search__leading-icon" icon="search" onClick={() => searchRef.current?.focus()} data-testid="search__leading-icon" />
                <input
                    {...props}
                    aria-label={ariaLabel}
                    className="search__input"
                    placeholder={placeholder}
                    type="search"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && value && handleSearch(caseSensitive ? value : value.toLowerCase())}
                    ref={searchRef}
                />
                {value && (
                    <IconButton
                        className="search__clear-button"
                        icon="close"
                        label="clear text"
                        variant="standard"
                        onClick={() => {
                            setValue('');
                            searchRef.current?.focus();
                        }}
                    />
                )}
            </div>
        );
    }
);

Search.displayName = 'Search';
