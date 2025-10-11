import Link from 'next/link';
import styles from '../../styles/ui/button.module.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    href = '#',
    onClick,
    disabled = false,
    fullWidth = false,
    icon,
    iconPosition = 'left',
    type = 'button',
    className = '',
    ...props
}) => {
    const buttonClasses = `
        ${styles.button} 
        ${styles[variant]} 
        ${styles[size]} 
        ${fullWidth ? styles.fullWidth : ''} 
        ${disabled ? styles.disabled : ''}
        ${className}
    `.trim();

    const content = (
        <>
            {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
            <span className={styles.text}>{children}</span>
            {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
        </>
    );

    return (
        <Link onClick={onClick} href={href} className={buttonClasses} {...props}>
            {content}
        </Link>
    );
};

export default Button;
