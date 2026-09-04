"use client";

import { useState } from "react";
import Image from "next/image";
import content from "@/content.json";
import FullscreenImageBanner from "@/components/common/fullscreen-image-banner";
import styles from "./home-hero-section.module.css";

export default function HomeHeroSection() {
  const { hero, footer } = content;
  const [logoSrc, setLogoSrc] = useState(() =>
    hero.logoImage.length > 0 ? hero.logoImage : ""
  );

  return (
    <section id="hero">
      <FullscreenImageBanner image={hero.backgroundImage} alt="" priority>
        {logoSrc.length > 0 ? (
          <Image
            src={logoSrc}
            alt={footer.companyName}
            width={340}
            height={197}
            className={styles.logoImage}
            onError={() => setLogoSrc("")}
          />
        ) : (
          <p className={styles.companyName}>{footer.companyName}</p>
        )}
        <p className={styles.slogan}>
          {hero.slogan.length > 0 ? hero.slogan : "슬로건 문구 준비 중"}
        </p>
      </FullscreenImageBanner>
    </section>
  );
}
