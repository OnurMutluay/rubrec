import { useTheme } from 'next-themes';
import styles from '../../styles/layout/themeswitcher.module.css';
import { Moon, Sun } from 'lucide-react';
import React from 'react';

const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className={styles.theme}>
            <Sun className={styles.sun} />
            <Moon className={styles.moon} />
        </button>
    );
};

export default ThemeSwitcher;
