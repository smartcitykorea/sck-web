import type { ReactNode } from "react";
import ImageWithFallback from "./image-with-fallback";
import styles from "./fullscreen-image-banner.module.css";

type ContentPosition = "center" | "bottom-left" | "bottom-right";

const CONTENT_POSITION_CLASS: Record<ContentPosition, string> = {
  center: styles.contentCenter,
  "bottom-left": styles.contentBottomLeft,
  "bottom-right": styles.contentBottomRight,
};

interface FullscreenImageBannerProps {
  id?: string;
  image?: string;
  alt: string;
  priority?: boolean;
  className?: string;
  contentPosition?: ContentPosition;
  children: ReactNode;
}

export default function FullscreenImageBanner({
  id,
  image,
  alt,
  priority = false,
  className,
  contentPosition = "center",
  children,
}: FullscreenImageBannerProps) {
  return (
    <div id={id} className={className ? `${styles.banner} ${className}` : styles.banner}>
      <div className={styles.background}>
        <ImageWithFallback src={image} alt={alt} fillParent priority={priority} />
        <div className={styles.overlay} />
      </div>
      <div className={`${styles.content} ${CONTENT_POSITION_CLASS[contentPosition]}`}>
        {children}
      </div>
    </div>
  );
}
