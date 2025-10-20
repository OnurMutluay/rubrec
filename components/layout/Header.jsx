import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import { useLocalization } from '@/hooks/useLocalization';
import { ArrowRight } from 'lucide-react';
import styles from '../../styles/layout/header.module.css';
import Language from './Language';
import MobileMenu from './MobileMenu';
import Button from '../ui/Button';

const Header = () => {
    const [isOpen, setOpen] = React.useState(false);
    const t = useLocalization();

    const [activeDropdown, setActiveDropdown] = React.useState(null);
    const servicesRef = React.useRef(null);
    const industriesRef = React.useRef(null);
    const navRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            // Tüm nav içinde tıklanmadıysa dropdown kapat
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <section className={styles.wrapper}>
            <header className={styles.menu}>
                <div className={`container ${styles.container}`}>
                    <Link href="/">
                        <img className={styles.logo} src="/images/logo_dark.svg" width={120} alt="Logo" />
                    </Link>

                    <div className={styles.navWrapper} ref={navRef}>
                        <ul className={styles.nav}>
                            <li
                                ref={servicesRef}
                                onClick={() => {
                                    setActiveDropdown(activeDropdown === 'services' ? null : 'services');
                                }}
                            >
                                <span className={activeDropdown === 'services' && styles.active}>{t.services}</span>
                            </li>

                            <li
                                ref={industriesRef}
                                onClick={() => {
                                    setActiveDropdown(activeDropdown === 'industries' ? null : 'industries');
                                }}
                            >
                                <span className={activeDropdown === 'industries' && styles.active}>{t.industries}</span>
                            </li>

                            <li>
                                <Link href="#">{t.caseStudies}</Link>
                            </li>
                        </ul>

                        <ul className={styles.nav}>
                            <li>
                                <Link href="#">{t.exploreRubrec}</Link>
                            </li>

                            <li>
                                <Link href="#">{t.insights}</Link>
                            </li>

                            <li>
                                <Link href="#">{t.contact}</Link>
                            </li>

                            <Language />

                            <Button variant="primary" size="small" icon={<ArrowRight size={18} />}>
                                {t.headerCTA}
                            </Button>
                        </ul>
                    </div>

                    <div className={styles.hamburger}>
                        <Hamburger distance="sm" color="var(--foreground)" rounded toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
                <MobileMenu isOpen={isOpen} />
            </header>

            <div className={styles.dropdowns}>
                <div
                    style={{
                        visibility: activeDropdown === 'services' ? 'visible' : 'hidden',
                        opacity: activeDropdown === 'services' ? 1 : 0,
                        zIndex: activeDropdown === 'services' ? 1001 : -999,
                    }}
                    className={styles.dropdown}
                >
                    <ul className="container">
                        <li>{t.strategyAndDesign}</li>
                        <li>{t.developmentAndEngineering}</li>
                        <li>{t.aiAndAgent}</li>
                        <li>{t.productManagement}</li>
                        <li>{t.cloudAndInfrastructure}</li>
                        <li>{t.auditAndQA}</li>
                    </ul>
                </div>

                <div
                    style={{
                        visibility: activeDropdown === 'industries' ? 'visible' : 'hidden',
                        opacity: activeDropdown === 'industries' ? 1 : 0,
                        zIndex: activeDropdown === 'industries' ? 1001 : -999,
                    }}
                    className={styles.dropdown}
                >
                    <ul className="container">
                        <li>{t.healthcare}</li>
                        <li>{t.foodDataSolutions}</li>
                        <li>{t.startupsAndScaleups}</li>
                        <li>{t.education}</li>
                        <li>{t.digitalShelf}</li>
                        <li>{t.retail}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Header;
