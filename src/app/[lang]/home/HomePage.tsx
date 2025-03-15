import JobSearch from "@/components/home/search/JobSearch";
import CategoryWrapper from "../../../components/home/categories/JobCategoryWrapper";
import { Locale } from "../../../config/i18n";
import Styles from "./Home.module.css";
import FeaturedJobs from "@/components/home/featured/FeaturedJobs";

interface HomePageProps {
  lang: Locale;
}

const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  return (
    <div className={Styles.wrapper}>
      <JobSearch lang={lang} />
      <FeaturedJobs lang={lang} />
      <CategoryWrapper lang={lang} />
    </div>
  );
};

export default HomePage;
