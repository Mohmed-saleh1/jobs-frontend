import CategoryWrapper from "../../../components/home/categories/JobCategoryWrapper";
import { Locale } from "../../../config/i18n";

interface HomePageProps {
  lang: Locale;
}

const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  return (
    <div>
      <CategoryWrapper lang={lang} />
    </div>
  );
};

export default HomePage;
