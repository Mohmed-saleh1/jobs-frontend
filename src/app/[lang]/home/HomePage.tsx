import { Locale } from "../../../config/i18n";

interface HomePageProps {
  lang: Locale;
}

const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  return <div>{lang}</div>;
};

export default HomePage;
