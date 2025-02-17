import styles from "./AboutUs.module.css";
import Image from "next/image";

export default function AboutUs({ t }: { t: any }) {
  return (
    <div>
      <Image
        src="/assets/about/about.jpg"
        alt="Team"
        width={1000}
        height={400}
        layout="reponsive"
        className={styles.aboutImage}
      />
      <section className={styles.aboutUsSection}>
        <div className={styles.contentContainer}>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>{t.aboutUs.subtitle}</h3>
            <h1 className={styles.title}>{t.aboutUs.title}</h1>
            <p className={styles.description}>{t.aboutUs.description}</p>

            <div className={styles.infoBlocks}>
              <div className={styles.infoBlock}>
                <div className={styles.icon}>🔭</div>
                <h2 className={styles.infoTitle}>{t.aboutUs.visionTitle}</h2>
                <p className={styles.infoText}>{t.aboutUs.visionDescription}</p>
              </div>
              <div className={styles.infoBlock}>
                <div className={styles.icon}>💡</div>
                <h2 className={styles.infoTitle}>{t.aboutUs.missionTitle}</h2>
                <p className={styles.infoText}>
                  {t.aboutUs.missionDescription}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/assets/about/3persons.jpg"
              alt="Team"
              width={300}
              height={600}
              layout="reponsive"
              className={styles.aboutImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
