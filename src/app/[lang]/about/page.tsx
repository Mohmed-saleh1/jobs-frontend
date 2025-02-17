import HowItWorks from "@/components/aboutUs/HowWorks/HowItWorks";
import AboutUs from "../../../components/aboutUs/AboutUs";
import { Locale } from "../../../config/i18n";

interface AboutPageProps {
  lang: Locale;
}

const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
  return (
    <div>
      <AboutUs lang={lang} />
      <HowItWorks lang={lang} />
    </div>
  );
};

export default AboutPage;
