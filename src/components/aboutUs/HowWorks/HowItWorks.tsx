import styles from "./howItWorks.module.css";
import FeatureCard from "./FeatureCard";

export default function HowItWorks({ t }: { t: any }) {
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
          imageSrc="/assets/about/Search.webp"
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
}
