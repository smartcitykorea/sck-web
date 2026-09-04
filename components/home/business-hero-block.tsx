import FullscreenImageBanner from "@/components/common/fullscreen-image-banner";
import styles from "./business-hero-block.module.css";

interface BusinessHeroBlockProps {
  id: string;
  name: string;
  slogan: string;
  image: string;
  align: "left" | "right";
  withTopDivider?: boolean;
}

export default function BusinessHeroBlock({
  id,
  name,
  slogan,
  image,
  align,
  withTopDivider = false,
}: BusinessHeroBlockProps) {
  return (
    <FullscreenImageBanner
      id={id}
      image={image}
      alt={name}
      contentPosition={align === "left" ? "bottom-left" : "bottom-right"}
      className={withTopDivider ? styles.divider : undefined}
    >
      <p className={styles.name}>{name}</p>
      <p className={styles.slogan}>{slogan}</p>
    </FullscreenImageBanner>
  );
}
