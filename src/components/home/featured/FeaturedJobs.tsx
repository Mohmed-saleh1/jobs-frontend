import styles from "./FeaturedJobs.module.css";
import { getTranslations } from "../../../lib/i18n";
import { Locale } from "../../../config/i18n";

interface FeaturedJobsProps {
  lang: Locale;
}

const FeaturedJobs: React.FC<FeaturedJobsProps> = async ({ lang }) => {
  // Fetch translations for the current language
  const t = await getTranslations(lang);

  return (
   <div className={styles.rootContainer}>
     <section className={styles.featuredJobs}>
      <h2 className={styles.title}>{t.featuredJobs.title}</h2>
      <div className={styles.underline}></div>
      <div className={styles.jobContainer}>
        <p className={styles.noVacancies}>{t.featuredJobs.noVacancies}</p>
      </div>
    </section>
   </div>
  );
};

export default FeaturedJobs;
