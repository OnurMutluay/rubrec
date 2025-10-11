import React from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';
import { Globe, X } from 'lucide-react';
import { useLocalization } from '@/hooks/useLocalization';
import styles from '../../styles/layout/language.module.css';
import Button from '../ui/Button';
import Dropdown from '../ui/Dropdown';

const options = [
    { value: 'en', label: 'English' },
    { value: 'tr', label: 'Türkçe' },
    { value: 'de', label: 'Deutsch' },
];

const LanguageModal = ({ isOpen, onClose }) => {
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [mounted, setMounted] = React.useState(false);

    const { locale, push } = useRouter();
    const t = useLocalization();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    React.useEffect(() => {
        const currentOption = options.find((opt) => opt.value === locale);
        setSelectedOption(currentOption);
    }, [locale]);

    const handleSave = () => {
        if (selectedOption && selectedOption.value !== locale) {
            document.cookie = `NEXT_LOCALE=${selectedOption.value}; path=/; max-age=31536000; SameSite=Lax`;
            onClose();
            setTimeout(() => {
                push('/', '/', { locale: selectedOption.value });
            }, 100);
        } else {
            onClose();
        }
    };

    if (!mounted) return null;

    const modalContent = (
        <div
            style={{
                visibility: isOpen ? 'visible' : 'hidden',
                zIndex: isOpen ? 9999 : -1,
                opacity: isOpen ? 1 : 0,
            }}
            className={styles.backdrop}
            onClick={onClose}
        >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <X onClick={onClose} className={styles.close} />
                <h4>{t.changeLanguage}</h4>
                <p className="small">{t.changeLanguageDescription}</p>

                <Dropdown
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder={t.selectLanguage}
                />

                <div className={styles.buttons}>
                    <Button onClick={handleSave} variant="primary">
                        {t.save}
                    </Button>
                    <Button variant="ghost" onClick={onClose}>
                        {t.cancel}
                    </Button>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

const Language = (props) => {
    const t = useLocalization();
    const { locale } = useRouter();

    const [isOpen, setOpen] = React.useState(false);

    if (props.mobile === true) {
        return (
            <>
                <LanguageModal isOpen={isOpen} onClose={() => setOpen(false)} />
                <button onClick={() => setOpen(true)} className={styles.mobileLanguage}>
                    <Globe color="var(--foreground)" />
                    <p className="small">{options.find((opt) => opt.value === locale)?.label || 'English'}</p>
                </button>
            </>
        );
    } else {
        return (
            <>
                <LanguageModal isOpen={isOpen} onClose={() => setOpen(false)} />
                <button onClick={() => setOpen(true)} className={styles.language}>
                    <Globe size={18} color="var(--foreground)" />
                    <p className="small">{options.find((opt) => opt.value === locale)?.label || 'English'}</p>
                </button>
            </>
        );
    }
};

export default Language;
