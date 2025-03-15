import HowItWorks from "../../../components/aboutUs/HowWorks/HowItWorks";
import AboutUs from "../../../components/aboutUs/AboutUs";
import StepsComponent from "../../../components/aboutUs/steps/stepsWrapper";
import { getTranslations } from "../../../lib/i18n";
import Image from "next/image";
import AboutStyles from "./About.module.css";


export default async function AboutPage({ params }: any) {
  const { lang } = await params;
  const t = await getTranslations(lang);
  return (
    <div className={AboutStyles.container}>
      <div>
        <Image
          src="/assets/about/about-header.png"
          alt="Team"
          width={300}
          height={200}
          className={AboutStyles.contactImage}
        />
      </div>
      <AboutUs t={t} />
      <HowItWorks t={t} />
      <StepsComponent t={t} />
    </div>
  );
}
