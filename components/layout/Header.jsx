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
    const [openDropdown, setOpenDropdown] = React.useState(null);
    const [isOpen, setOpen] = React.useState(false);

    const [selectedService, setSelectedService] = React.useState('design_strategy');
    const [selectedIndustry, setSelectedIndustry] = React.useState('healthcare');

    const t = useLocalization();

    const [drop, setDrop] = React.useState(false);

    return (
        <header className={styles.wrapper}>
            <div className={`container ${styles.container}`}>
                <Link href="/">
                    <img className={styles.logo} src="/images/logo_dark.svg" width={120} alt="Logo" />
                </Link>

                <div className={styles.navWrapper}>
                    <ul className={styles.nav}>
                        <li
                            onMouseLeave={() => {
                                setOpenDropdown(null);
                                setSelectedService('design_strategy');
                            }}
                            onMouseEnter={() => setOpenDropdown('services')}
                        >
                            <Link href="#">{t.services}</Link>

                            <motion.div
                                className={styles.dropdownMenu}
                                initial={false}
                                animate={{
                                    opacity: openDropdown === 'services' ? 1 : 0,
                                    y: openDropdown === 'services' ? 0 : -10,
                                    pointerEvents: openDropdown === 'services' ? 'auto' : 'none',
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 30,
                                }}
                            >
                                <ul>
                                    <li onMouseEnter={() => setSelectedService('design_strategy')}>
                                        <Link href="#">{t.strategyAndDesign}</Link>
                                    </li>

                                    <li onMouseEnter={() => setSelectedService('development_engineering')}>
                                        <Link href="#">{t.developmentAndEngineering}</Link>
                                    </li>

                                    <li onMouseEnter={() => setSelectedService('ai_agents')}>
                                        <Link href="#">{t.aiAndAgent}</Link>
                                    </li>

                                    <li onMouseEnter={() => setSelectedService('product_management')}>
                                        <Link href="#">{t.productManagement}</Link>
                                    </li>

                                    <li onMouseEnter={() => setSelectedService('cloud_infrastructure')}>
                                        <Link href="#">{t.cloudAndInfrastructure}</Link>
                                    </li>

                                    <li onMouseEnter={() => setSelectedService('audit_qa')}>
                                        <Link href="#">{t.auditAndQA}</Link>
                                    </li>
                                </ul>

                                <img src={`/images/${selectedService}.jpg`} alt="Services" />
                            </motion.div>
                        </li>

                        <li
                            onMouseLeave={() => {
                                setOpenDropdown(null);
                                setSelectedIndustry('healthcare');
                            }}
                            onMouseEnter={() => setOpenDropdown('industries')}
                        >
                            <Link href="#">{t.industries}</Link>

                            <motion.div
                                className={styles.dropdownMenu}
                                initial={false}
                                animate={{
                                    opacity: openDropdown === 'industries' ? 1 : 0,
                                    y: openDropdown === 'industries' ? 0 : -10,
                                    pointerEvents: openDropdown === 'industries' ? 'auto' : 'none',
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 30,
                                }}
                            >
                                <ul>
                                    <li onMouseEnter={() => setSelectedIndustry('healthcare')}>
                                        <Link href="#">{t.healthcare}</Link>
                                    </li>

                                    <li onMouseEnter={() => setSelectedIndustry('food_data_solutions')}>
                                        <Link href="#">{t.foodDataSolutions}</Link>
                                    </li>

                                    <li onMouseEnter={() => setSelectedIndustry('startups_scaleups')}>
                                        <Link href="#">{t.startupsAndScaleups}</Link>
                                    </li>

                                    <li onMouseEnter={() => setSelectedIndustry('education')}>
                                        <Link href="#">{t.education}</Link>
                                    </li>

                                    <li onMouseEnter={() => setSelectedIndustry('digital_shelf')}>
                                        <Link href="#">{t.digitalShelf}</Link>
                                    </li>

                                    <li onMouseEnter={() => setSelectedIndustry('retail')}>
                                        <Link href="#">{t.retail}</Link>
                                    </li>
                                </ul>

                                <img src={`/images/industries_${selectedIndustry}.jpg`} alt="Industries" />
                            </motion.div>
                        </li>

                        <li>
                            <Link href="#">{t.caseStudies}</Link>
                        </li>
                    </ul>

                    <ul className={styles.nav}>
                        <Link href="#">
                            <p className="small">{t.exploreRubrec}</p>
                        </Link>

                        <Link href="#">
                            <p className="small">{t.insights}</p>
                        </Link>

                        <Link href="#">
                            <p className="small">{t.contact}</p>
                        </Link>

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
    );
};

export default Header;
