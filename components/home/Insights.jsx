import { useLocalization } from '@/hooks/useLocalization';
import styles from '../../styles/home/insights.module.css';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const Insights = () => {
    const t = useLocalization();

    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    <h3>{t.insights}</h3>
                    <p className="caption">{t.insightsDescription}</p>
                </div>

                <div className={styles.button}>
                    <Button size="small" variant="secondary">
                        {t.allInsights}
                    </Button>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <img src="/images/insights/lipton.jpg" alt="Lipton" />
                    <div className={styles.content}>
                        <Badge>{t.milestones}</Badge>
                        <p className="small">{t.insight}</p>
                        <p className="small">{t.insightDate}</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/images/insights/cloud.jpg" alt="Cloud" />
                    <div className={styles.content}>
                        <Badge>{t.milestones}</Badge>
                        <p className="small">{t.insight}</p>
                        <p className="small">{t.insightDate}</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/images/insights/development.jpg" alt="Development" />
                    <div className={styles.content}>
                        <Badge>{t.milestones}</Badge>
                        <p className="small">{t.insight}</p>
                        <p className="small">{t.insightDate}</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/images/insights/metro.jpg" alt="Metro" />
                    <div className={styles.content}>
                        <Badge>{t.milestones}</Badge>
                        <p className="small">{t.insight}</p>
                        <p className="small">{t.insightDate}</p>
                    </div>
                </div>
            </div>

            <div className={styles.mobileButton}>
                <Button size="small" variant="secondary" fullWidth>
                    {t.allInsights}
                </Button>
            </div>
        </div>
    );
};

export default Insights;
