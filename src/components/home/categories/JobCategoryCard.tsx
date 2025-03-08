import { Locale } from "../../../config/i18n";
import styles from "./JobCategoryCard.module.css";
import Image from "next/image";
import { getTranslations } from "../../../lib/i18n";

interface JobCategoryCardProps {
  lang: Locale;
  imageSrc: string;
  descriptionKey: string;
}

const JobCategoryCard: React.FC<JobCategoryCardProps> = async ({
  lang,
  imageSrc,
  descriptionKey,
}) => {
  const t = await getTranslations(lang);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={t.jobCategories[descriptionKey]}
          width={100}
          height={100}
          className={styles.image}
        />
      </div>
      <p className={styles.description}>{t.jobCategories[descriptionKey]}</p>
    </div>
  );
};

export default JobCategoryCard;
