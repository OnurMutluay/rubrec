import { useLocalization } from '@/hooks/useLocalization';
import styles from '../../styles/home/brands.module.css';
import Button from '../ui/Button';

const Brands = () => {
    const t = useLocalization();

    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    <h3>{t.brandsTitle}</h3>
                    <p className="caption">
                        We partner with innovative brands to deliver impactful digital services that drive growth and
                        transformation.
                    </p>
                </div>

                <div className={styles.button}>
                    <Button size="small" variant="secondary">
                        {t.allBrands}
                    </Button>
                </div>
            </div>

            <img className={styles.divider} src="/images/brands_divider.png" alt="Brands Divider" />

            <div className={styles.brands}>
                <div className={styles.brand}>
                    <img className={styles.lipton} src="/images/customers/lipton_dark.svg" alt="Lipton" />

                    <p className="caption">{t.liptonBrand}</p>
                </div>

                <div className={styles.brand}>
                    <img className={styles.trt} src="/images/customers/trt.svg" alt="TRT" />

                    <p className="caption">{t.trtGlobalBrand}</p>
                </div>

                <div className={styles.brand}>
                    <img className={styles.metro} src="/images/customers/metro_dark.svg" alt="Metro" />

                    <p className="caption">{t.metroBrand}</p>
                </div>
            </div>

            <div className={styles.mobileButton}>
                <Button size="small" variant="secondary" fullWidth>
                    {t.allBrands}
                </Button>
            </div>
        </div>
    );
};

export default Brands;
