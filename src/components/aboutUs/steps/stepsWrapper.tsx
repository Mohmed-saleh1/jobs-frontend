// pages/index.tsx
import Head from "next/head";
import styles from "./StepCard.module.css";
import StepCard from "./StepCard";

export default function StepsComponent({ t }: { t: any }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{t.aboutUs.steps.step1.title}</title>
        <meta name="description" content={t.aboutUs.steps.step1.description} />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <StepCard
            number="1"
            title={t.aboutUs.steps.step1.title}
            description={t.aboutUs.steps.step1.description}
          />
          <StepCard
            number="2"
            title={t.aboutUs.steps.step2.title}
            description={t.aboutUs.steps.step2.description}
          />
          <StepCard
            number="3"
            title={t.aboutUs.steps.step3.title}
            description={t.aboutUs.steps.step3.description}
          />
          <StepCard
            number="4"
            title={t.aboutUs.steps.step4.title}
            description={t.aboutUs.steps.step4.description}
          />
          <StepCard
            number="5"
            title={t.aboutUs.steps.step5.title}
            description={t.aboutUs.steps.step5.description}
          />
          <StepCard
            number="6"
            title={t.aboutUs.steps.step6.title}
            description={t.aboutUs.steps.step6.description}
          />
        </div>
      </main>
    </div>
  );
}
