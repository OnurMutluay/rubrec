import styles from '../../styles/home/insights.module.css';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const Insights = () => {
    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    <h3>Insights</h3>
                    <p className="caption">
                        We partner with innovative brands to deliver impactful digital services that drive growth and
                        transformation.
                    </p>
                </div>

                <div className={styles.button}>
                    <Button size="small" variant="secondary">
                        All Insights
                    </Button>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <img src="/images/insights/lipton.jpg" alt="Lipton" />
                    <div className={styles.content}>
                        <Badge>Milstones</Badge>
                        <p className="small">We Established a Long-Term Strategy and Design Partnership with Lipton</p>
                        <p className="footnote">November 25 - 2025</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/images/insights/cloud.jpg" alt="Cloud" />
                    <div className={styles.content}>
                        <Badge>Milstones</Badge>
                        <p className="small">We Established a Long-Term Strategy and Design Partnership with Lipton</p>
                        <p className="footnote">November 25 - 2025</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/images/insights/development.jpg" alt="Development" />
                    <div className={styles.content}>
                        <Badge>Milstones</Badge>
                        <p className="small">We Established a Long-Term Strategy and Design Partnership with Lipton</p>
                        <p className="footnote">November 25 - 2025</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/images/insights/metro.jpg" alt="Metro" />
                    <div className={styles.content}>
                        <Badge>Milstones</Badge>
                        <p className="small">We Established a Long-Term Strategy and Design Partnership with Lipton</p>
                        <p className="footnote">November 25 - 2025</p>
                    </div>
                </div>
            </div>

            <div className={styles.mobileButton}>
                <Button size="small" variant="secondary" fullWidth>
                    All Insights
                </Button>
            </div>
        </div>
    );
};

export default Insights;
