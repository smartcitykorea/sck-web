"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import content from "@/content.json";
import styles from "./site-header-nav.module.css";

const BUSINESS_NAV_ANCHOR = "#business";

export default function SiteHeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileBusinessOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          {content.hero.logoImage.length > 0 ? (
            <Image
              src={content.hero.logoImage}
              alt={content.footer.companyName}
              width={69}
              height={40}
              className={styles.brandLogo}
              priority
            />
          ) : (
            content.footer.companyName
          )}
        </Link>

        <ul className={styles.menuDesktop}>
          {content.nav.items.map((item) =>
            item.anchor === BUSINESS_NAV_ANCHOR ? (
              <li key={item.label} className={styles.dropdownItem}>
                <Link href={`/${item.anchor}`} className={styles.menuLink}>
                  {item.label}
                </Link>
                <ul className={styles.dropdownMenu}>
                  {content.business.items.map((business) => (
                    <li key={business.id}>
                      <Link
                        href={`/#business-${business.id}`}
                        className={styles.dropdownLink}
                      >
                        {business.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <Link href={`/${item.anchor}`} className={styles.menuLink}>
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <button
          type="button"
          className={styles.hamburgerButton}
          aria-label="메뉴 열기"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.hamburgerIcon} data-open={isMenuOpen} />
        </button>
      </nav>

      {isMenuOpen && (
        <ul className={styles.menuMobile}>
          {content.nav.items.map((item) =>
            item.anchor === BUSINESS_NAV_ANCHOR ? (
              <li key={item.label} className={styles.mobileDropdownItem}>
                <button
                  type="button"
                  className={styles.mobileDropdownToggle}
                  aria-expanded={isMobileBusinessOpen}
                  onClick={() => setIsMobileBusinessOpen((open) => !open)}
                >
                  {item.label}
                  <span
                    className={styles.mobileDropdownArrow}
                    data-open={isMobileBusinessOpen}
                  />
                </button>
                {isMobileBusinessOpen && (
                  <ul className={styles.mobileSubMenu}>
                    {content.business.items.map((business) => (
                      <li key={business.id}>
                        <Link
                          href={`/#business-${business.id}`}
                          className={styles.menuLink}
                          onClick={closeMobileMenu}
                        >
                          {business.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={`/${item.anchor}`}
                  className={styles.menuLink}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </header>
  );
}
