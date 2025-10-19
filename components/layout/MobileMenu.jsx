import React from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { useLocalization } from '@/hooks/useLocalization';
import styles from '../../styles/layout/mobilemenu.module.css';
import Language from './Language';

const MainMobileMenu = ({ activeMenu, setActiveMenu }) => {
    const t = useLocalization();

    return (
        <ul className={`container ${styles.menu} ${activeMenu === 'main' ? styles.menuActive : ''}`}>
            <li onClick={() => setActiveMenu('services')}>
                <p>{t.services}</p>
                <span className={`${styles.arrowContainer} ${styles.colorized}`}>
                    <ChevronRight />
                </span>
            </li>

            <li onClick={() => setActiveMenu('industries')}>
                <p>{t.industries}</p>
                <span className={`${styles.arrowContainer} ${styles.colorized}`}>
                    <ChevronRight />
                </span>
            </li>

            <Link href="#">
                <li>
                    <p>{t.caseStudies}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.exploreRubrec}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.insights}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.contact}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>
        </ul>
    );
};

const ServicesMenu = ({ activeMenu, setActiveMenu }) => {
    const t = useLocalization();

    return (
        <ul className={`container ${styles.menu} ${activeMenu === 'services' ? styles.menuActive : ''}`}>
            <div onClick={() => setActiveMenu('main')} className={styles.back}>
                <ChevronLeft size={24} />
                <p>{t.back}</p>
            </div>

            <Link href="#">
                <li>
                    <p>{t.strategyAndDesign}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.developmentAndEngineering}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.aiAndAgent}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.productManagement}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.cloudAndInfrastructure}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.auditAndQA}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>
        </ul>
    );
};

const IndustriesMenu = ({ activeMenu, setActiveMenu }) => {
    const t = useLocalization();

    return (
        <ul className={`container ${styles.menu} ${activeMenu === 'industries' ? styles.menuActive : ''}`}>
            <div onClick={() => setActiveMenu('main')} className={styles.back}>
                <ChevronLeft size={24} />
                <p>{t.back}</p>
            </div>

            <Link href="#">
                <li>
                    <p>{t.healthcare}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.foodDataSolutions}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.startupsAndScaleups}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.education}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.digitalShelf}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>

            <Link href="#">
                <li>
                    <p>{t.retail}</p>
                    <span className={styles.arrowContainer}>
                        <ChevronRight />
                    </span>
                </li>
            </Link>
        </ul>
    );
};

const MobileMenu = (props) => {
    const t = useLocalization();

    const [activeMenu, setActiveMenu] = React.useState('main');

    React.useEffect(() => {
        if (props.isOpen === false) {
            setActiveMenu('main');
        }
    }, [props.isOpen]);

    return (
        <div
            style={{
                opacity: props.isOpen === true ? 1 : 0,
                zIndex: props.isOpen === true ? 998 : -999,
                visibility: props.isOpen === true ? 'visible' : 'hidden',
            }}
            className={styles.container}
        >
            <MainMobileMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <ServicesMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <IndustriesMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

            <div className="container">
                <Link href="#" className={styles.cta}>
                    <ArrowRight />
                    <p>{t.headerCTA}</p>
                </Link>
            </div>

            <div className={`container ${styles.actionButtons}`}>
                <Language mobile={true} />
            </div>
        </div>
    );
};

export default MobileMenu;
