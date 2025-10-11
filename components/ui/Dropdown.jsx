// components/ui/Dropdown.jsx
import Select from 'react-select';

const Dropdown = ({
    value,
    onChange,
    options,
    placeholder = 'Select an option...',
    isSearchable = false,
    customStyles = {},
}) => {
    const defaultStyles = {
        control: (base, state) => ({
            ...base,
            padding: '1rem',
            borderRadius: 'var(--radius)',
            border: state.isFocused ? '1px solid var(--foreground)' : '1px solid var(--gray)',
            backgroundColor: 'var(--background)',
            cursor: 'pointer',
            fontSize: '1.6rem',
            marginTop: '1rem',
            boxShadow: state.isFocused ? '0 0 0 1px var(--foreground)' : 'none',
            transition: 'all 0.2s',
            '&:hover': {
                borderColor: 'var(--foreground)',
            },
            ...(customStyles.control?.(base, state) || {}),
        }),
        option: (base, state) => ({
            ...base,
            padding: '1.6rem 2rem',
            fontSize: '1.6rem',
            borderRadius: '1rem',
            backgroundColor: state.isSelected ? 'var(--foreground)' : state.isFocused ? 'var(--gray)' : 'var(--background)',
            color: state.isSelected ? 'var(--background)' : 'var(--foreground)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            ...(customStyles.option?.(base, state) || {}),
        }),
        menu: (base) => ({
            ...base,
            borderRadius: 'var(--radius)',
            marginTop: '0.8rem',
            overflow: 'hidden',
            backgroundColor: 'var(--background)',
            border: '1px solid var(--gray)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            ...(customStyles.menu?.(base) || {}),
        }),
        menuList: (base) => ({
            ...base,
            padding: '0.8rem',
            ...(customStyles.menuList?.(base) || {}),
        }),
        singleValue: (base) => ({
            ...base,
            color: 'var(--foreground)',
            ...(customStyles.singleValue?.(base) || {}),
        }),
        placeholder: (base) => ({
            ...base,
            color: 'var(--foreground)',
            opacity: 0.5,
            ...(customStyles.placeholder?.(base) || {}),
        }),
        input: (base) => ({
            ...base,
            color: 'var(--foreground)',
            ...(customStyles.input?.(base) || {}),
        }),
        indicatorSeparator: (base) => ({
            ...base,
            backgroundColor: 'var(--gray)',
            ...(customStyles.indicatorSeparator?.(base) || {}),
        }),
        dropdownIndicator: (base, state) => ({
            ...base,
            color: state.isFocused ? 'var(--foreground)' : 'var(--gray)',
            transition: 'all 0.2s',
            '&:hover': {
                color: 'var(--foreground)',
            },
            ...(customStyles.dropdownIndicator?.(base, state) || {}),
        }),
    };

    return (
        <Select
            value={value}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            styles={defaultStyles}
            isSearchable={isSearchable}
        />
    );
};

export default Dropdown;
