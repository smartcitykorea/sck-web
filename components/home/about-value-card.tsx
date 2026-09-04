import Image from "next/image";
import styles from "./about-value-card.module.css";

interface AboutValueCardProps {
  icon: string;
  letter: string;
  keyword: string;
  description: string;
}

export default function AboutValueCard({ icon, letter, keyword, description }: AboutValueCardProps) {
  return (
    <div className={styles.card}>
      {icon.length > 0 ? (
        <Image src={icon} alt="" width={40} height={40} className={styles.iconImage} />
      ) : (
        <span className={styles.letterIcon} aria-hidden="true">
          {letter}
        </span>
      )}
      <p className={styles.keyword}>{keyword}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
