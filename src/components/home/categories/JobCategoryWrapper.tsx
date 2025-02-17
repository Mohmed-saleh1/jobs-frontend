import JobCategoryCard from "./JobCategoryCard";
import { Locale } from "../../../config/i18n";
import styles from "./JobCategoryCard.module.css";

interface CategoryWrapperProps {
  lang: Locale;
}

const CategoryWrapper: React.FC<CategoryWrapperProps> = ({ lang }) => {
  const categories = [
    {
      imageSrc: "/assets/categories/healthcare.png",
      descriptionKey: "Health and Care",
    },
    {
      imageSrc: "/assets/categories/development.webp",
      descriptionKey: "IT and Informatics",
    },
    {
      imageSrc: "/assets/categories/engineering.webp",
      descriptionKey: "Engineering and Technology",
    },
    {
      imageSrc: "/assets/categories/tool-box.webp",
      descriptionKey: "Crafts and Technical Trades",
    },
    {
      imageSrc: "/assets/categories/mother.webp",
      descriptionKey: "Education and Childcare",
    },
    {
      imageSrc: "/assets/categories/warehouse.webp",
      descriptionKey: "Logistics and Transport",
    },
    {
      imageSrc: "/assets/categories/helmet-1.webp",
      descriptionKey: "Construction",
    },
    {
      imageSrc: "/assets/categories/microscope.webp",
      descriptionKey: "Natural Sciences and Research",
    },
    {
      imageSrc: "/assets/categories/travel-and-tourism.webp",
      descriptionKey: "Hospitality and Tourism",
    },
    {
      imageSrc: "/assets/categories/social.png",
      descriptionKey: "Social Work",
    },
    {
      imageSrc: "/assets/categories/agronomy.webp",
      descriptionKey: "Agriculture and Agronomy",
    },
    {
      imageSrc: "/assets/categories/budget.webp",
      descriptionKey: "Finance and Insurance",
    },
  ];

  return (
    <div className={styles.wrapper}>
      {categories.map((category, index) => (
        <JobCategoryCard
          key={index}
          lang={lang}
          imageSrc={category.imageSrc}
          descriptionKey={category.descriptionKey}
        />
      ))}
    </div>
  );
};

export default CategoryWrapper;
