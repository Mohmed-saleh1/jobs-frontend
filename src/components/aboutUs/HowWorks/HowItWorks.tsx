import styles from "./howItWorks.module.css";
import FeatureCard from "./FeatureCard";
import { Locale } from "@/config/i18n";
import { getTranslations } from "@/lib/i18n";

interface HowItWorksProps {
  lang: Locale;
}

const HowItWorks: React.FC<HowItWorksProps> = async ({ lang }) => {
  const t = await getTranslations(lang);

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>{t.aboutUs.howItWorks.title}</h2>
      <p className={styles.subtitle}>{t.aboutUs.howItWorks.description}</p>
      <div className={styles.cards}>
        <FeatureCard
          imageSrc="/assets/about/register.png"
          title={t.aboutUs.howItWorks.registerTitle}
          description={t.aboutUs.howItWorks.registerDescription}
        />
        <FeatureCard
          imageSrc="/assets/about/search.png"
          title={t.aboutUs.howItWorks.searchTitle}
          description={t.aboutUs.howItWorks.searchDescription}
        />
        <FeatureCard
          imageSrc="/assets/about/apply.png"
          title={t.aboutUs.howItWorks.applyTitle}
          description={t.aboutUs.howItWorks.applyDescription}
        />
      </div>
    </section>
  );
};

export default HowItWorks;
