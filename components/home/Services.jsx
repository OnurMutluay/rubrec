import { useLocalization } from '@/hooks/useLocalization';
import styles from '../../styles/home/services.module.css';

const Services = () => {
    const t = useLocalization();

    return (
        <div className={`${styles.container} container`}>
            <h3>{t.ourServices}</h3>
            <p className="caption">{t.ourServicesDescription}</p>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <img src="/images/development_engineering.jpg" alt="Development and Engineering" />
                    <div className={styles.texts}>
                        <h4>{t.developmentAndEngineering}</h4>
                        <p className="caption">{t.developmentAndEngineeringDescription}</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/images/design_strategy.jpg" alt="Strategy and Design" />
                    <div className={styles.texts}>
                        <h4>{t.strategyAndDesign}</h4>
                        <p className="caption">{t.strategyAndDesignDescription}</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/images/ai_agents.jpg" alt="AI and Agents" />
                    <div className={styles.texts}>
                        <h4>{t.aiAndAgent}</h4>
                        <p className="caption">{t.aiAndAgentDescription}</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/images/product_management.jpg" alt="Product Management" />
                    <div className={styles.texts}>
                        <h4>{t.productManagement}</h4>
                        <p className="caption">{t.productManagementDescription}</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/images/cloud_infrastructure.jpg" alt="Cloud and Infrastructure" />
                    <div className={styles.texts}>
                        <h4>{t.cloudAndInfrastructure}</h4>
                        <p className="caption">{t.cloudAndInfrastructureDescription}</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/images/audit_qa.jpg" alt="Audit and QA" />
                    <div className={styles.texts}>
                        <h4>{t.auditAndQA}</h4>
                        <p className="caption">{t.auditAndQADescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
