import { Locale } from "../../../config/i18n";
import styles from "./JobSearch.module.css";
import { getTranslations } from "../../../lib/i18n";

interface JobSearchProps {
  lang: Locale;
}

const JobSearch: React.FC<JobSearchProps> = async ({ lang }) => {
  // Fetch translations for the current language
  const t = await getTranslations(lang);

  return (
    <section className={styles.jobSearch}>
      <div className={styles.container}>
        <h2 className={styles.header}>
          {t.jobSearch.header.beforeNumber} <span>{t.jobSearch.jobsCount}</span>{" "}
          {t.jobSearch.header.afterNumber}
        </h2>
        <p className={styles.subText}>{t.jobSearch.subText}</p>

        <div className={styles.searchBox}>
          <div className={styles.tabs}>
            <button className={styles.active}>{t.jobSearch.jobsTab}</button>
            <button>{t.jobSearch.resumesTab}</button>
          </div>

          <div className={styles.searchInputs}>
            <input type="text" placeholder={t.jobSearch.keywordsPlaceholder} />
            <input type="text" defaultValue="Egypt" readOnly />
            <select>
              <option value="">{t.jobSearch.categoryPlaceholder}</option>
              <option value="IT">{t.jobSearch.categories.it}</option>
              <option value="Finance">{t.jobSearch.categories.finance}</option>
              <option value="Marketing">
                {t.jobSearch.categories.marketing}
              </option>
            </select>
            <button className={styles.searchButton}>
              {t.jobSearch.searchButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearch;
