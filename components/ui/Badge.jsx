import styles from '../../styles/ui/badge.module.css';

const Badge = ({ children, variant }) => {
    return (
        <span className={`${styles.badge} ${variant === 'secondary' ? styles.secondary : styles.primary}`}>{children}</span>
    );
};

export default Badge;
