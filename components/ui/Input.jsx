import React from 'react';
import styles from '../../styles/ui/input.module.css';

const Input = React.forwardRef(
    ({ placeholder = 'Enter text...', type = 'text', value, onChange, disabled = false, className = '', ...props }, ref) => {
        return (
            <input
                ref={ref}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`${styles.input} ${className}`}
                {...props}
            />
        );
    }
);

export default Input;
