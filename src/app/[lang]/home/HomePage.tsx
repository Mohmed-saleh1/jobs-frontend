import { Locale } from "../../../config/i18n";
import Styles from "./Home.module.css";

interface HomePageProps {
  lang: Locale;
}

const HomePage: React.FC<HomePageProps> = () => {
  return <div className={Styles.wrapper}>welcome to sa-comsmos courses</div>;
};

export default HomePage;
