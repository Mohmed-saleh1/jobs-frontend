import styles from "./StepCard.module.css";

interface StepCardProps {
  title: string;
  description: string;
  number: string;
}

const StepCard: React.FC<StepCardProps> = ({ title, description, number }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardNumber}>{number}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default StepCard;
