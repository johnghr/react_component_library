import { render, screen, fireEvent } from '@testing-library/react';
import { Search, SearchProps } from '@/components/Search/Search';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';

const testProps: SearchProps = {
    ariaLabel: 'search input',
    handleSearch: vi.fn()
};

describe('Search component', () => {
    it('renders the search input with the correct aria-label', () => {
        render(<Search {...testProps} />);
        const searchInput = screen.getByLabelText('search input');

        expect(searchInput).toBeInTheDocument();
    });
    it('renders the search input with the correct aria-label', () => {
        render(<Search {...testProps} />);
        const searchInput = screen.getByLabelText('search input');

        expect(searchInput).toBeInTheDocument();
    });

    it('renders the leading icon with the correct className', () => {
        render(<Search {...testProps} />);
        const leadingIcon = screen.getByTestId('search__leading-icon');

        expect(leadingIcon).toHaveClass('search__leading-icon');
    });

    it('updates the input value correctly on change', () => {
        render(<Search {...testProps} />);
        const searchInput = screen.getByLabelText('search input') as HTMLInputElement;

        fireEvent.change(searchInput, { target: { value: 'new search text' } });

        expect(searchInput.value).toBe('new search text');
    });

    it('calls handleSearch with correct value when Enter key is pressed', () => {
        const handleSearchMock = vi.fn();
        render(<Search {...testProps} handleSearch={handleSearchMock} />);
        const searchInput = screen.getByLabelText('search input');

        fireEvent.change(searchInput, { target: { value: 'test search' } });
        fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

        expect(handleSearchMock).toHaveBeenCalledWith('test search');
    });

    it('calls handleSearch with case-insensitive value when Enter key is pressed', () => {
        const handleSearchMock = vi.fn();
        render(<Search {...testProps} caseSensitive={false} handleSearch={handleSearchMock} />);
        const searchInput = screen.getByLabelText('search input');

        fireEvent.change(searchInput, { target: { value: 'TEST SEARCH' } });
        fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

        expect(handleSearchMock).toHaveBeenCalledWith('test search');
    });

    it('calls handleSearch with case-sensitive value when Enter key is pressed', () => {
        const handleSearchMock = vi.fn();
        render(<Search {...testProps} caseSensitive={true} handleSearch={handleSearchMock} />);
        const searchInput = screen.getByLabelText('search input');

        fireEvent.change(searchInput, { target: { value: 'Test Search' } });
        fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

        expect(handleSearchMock).toHaveBeenCalledWith('Test Search');
    });

    it('clears the input value when the clear button is clicked', () => {
        render(<Search {...testProps} defaultValue="initial value" />);
        const searchInput = screen.getByLabelText('search input') as HTMLInputElement;

        expect(searchInput.value).toBe('initial value');

        const clearButton = screen.getByRole('button', { name: 'clear text' });
        fireEvent.click(clearButton);

        expect(searchInput.value).toBe('');
    });

    it('focuses the input when the leading icon is clicked', () => {
        render(<Search {...testProps} />);
        const searchInput = screen.getByLabelText('search input');
        const leadingIcon = screen.getByTestId('search__leading-icon');

        fireEvent.click(leadingIcon);

        expect(document.activeElement).toBe(searchInput);
    });

    it('does not call handleSearch when Enter key is pressed with empty input', () => {
        const handleSearchMock = vi.fn();
        render(<Search {...testProps} handleSearch={handleSearchMock} />);
        const searchInput = screen.getByLabelText('search input');

        fireEvent.change(searchInput, { target: { value: '' } });
        fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

        expect(handleSearchMock).not.toHaveBeenCalled();
    });

    it('initializes with the default value', () => {
        render(<Search {...testProps} defaultValue="initial value" />);
        const searchInput = screen.getByLabelText('search input') as HTMLInputElement;

        expect(searchInput.value).toBe('initial value');
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<Search {...testProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
