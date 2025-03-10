import CategoryWrapper from "../../../components/home/categories/JobCategoryWrapper";
import { Locale } from "../../../config/i18n";
import Styles from "./Home.module.css";

interface HomePageProps {
  lang: Locale;
}

const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  return (
    <div className={Styles.wrapper}>
      <CategoryWrapper lang={lang} />
    </div>
  );
};

export default HomePage;
