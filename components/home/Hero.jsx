import Image from 'next/image';
import styles from '../../styles/home/hero.module.css';
import { useLocalization } from '@/hooks/useLocalization';

const Hero = () => {
    const t = useLocalization();
    return (
        <section>
            <div className={`container ${styles.container}`}>
                <h2>{t.heroCTA}</h2>
                <p className="caption">{t.heroDescription}</p>

                <div className={styles.grid}>
                    <div className={`${styles.card} ${styles.lipton}`}>
                        <img src="/images/customers/lipton.png" alt="lipton" />
                    </div>

                    <div className={`${styles.card} ${styles.heva}`}>
                        <img src="/images/customers/heva.png" alt="heva" />
                    </div>

                    <div className={`${styles.card} ${styles.foodmetrics}`}>
                        <div>
                            <h4>{t.foodmetrics}</h4>
                            <p className="footnote">{t.foodmetricsDescription}</p>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.secunnix}`}>
                        <img src="/images/customers/secunnix.png" alt="secunnix" />
                    </div>

                    <div className={`${styles.card} ${styles.metro}`}>
                        <img src="/images/customers/metro.png" alt="metro" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
