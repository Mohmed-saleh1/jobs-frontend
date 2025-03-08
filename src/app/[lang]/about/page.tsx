import HowItWorks from "../../../components/aboutUs/HowWorks/HowItWorks";
import AboutUs from "../../../components/aboutUs/AboutUs";
import StepsComponent from "../../../components/aboutUs/steps/stepsWrapper";
import { getTranslations } from "../../../lib/i18n";

export default async function AboutPage({ params }: any) {
  const { lang } = await params;
  const t = await getTranslations(lang);
  return (
    <div>
      <AboutUs t={t} />
      <HowItWorks t={t} />
      <StepsComponent t={t} />
    </div>
  );
}
