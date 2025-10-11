import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown';
import { useLocalization } from '@/hooks/useLocalization';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import { useState, useEffect } from 'react';
const options = [
    { value: 'en', label: 'English' },
    { value: 'tr', label: 'Türkçe' },
    { value: 'de', label: 'Deutsch' },
];
export default function Home() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const t = useLocalization();

    /* useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    } */

    return (
        <>
            {/* <p>{theme}</p> */}
            {/* <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                    <option value="system">System</option>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select> */}

            {/* <div style={{ width: '40rem', marginTop: '20rem', marginLeft: '40rem' }}>
                <Dropdown value={'en'} options={options} placeholder="Select an option..." />
            </div> */}
        </>
    );
}
