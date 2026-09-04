import ImageWithFallback from "@/components/common/image-with-fallback";
import styles from "./case-card.module.css";

interface CaseCardProps {
  image: string;
  name: string;
}

export default function CaseCard({ image, name }: CaseCardProps) {
  return (
    <div className={styles.card}>
      <ImageWithFallback src={image} alt={name} aspectRatio="4/3" />
      <div className={styles.overlay}>
        <p className={styles.overlayName}>{name}</p>
      </div>
      <p className={styles.mobileLabel}>{name}</p>
    </div>
  );
}
