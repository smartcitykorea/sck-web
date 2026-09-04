"use client";

import { useState } from "react";
import content from "@/content.json";
import CaseCard from "./case-card";
import type { CaseItem } from "@/lib/case-types";
import styles from "./cases-section.module.css";

const VISIBLE_LIMIT = 8;

export default function CasesSection() {
  const items = content.cases.items as CaseItem[];
  const [isExpanded, setIsExpanded] = useState(false);

  if (items.length === 0) {
    return (
      <section id="cases" className={styles.cases}>
        <div className={styles.inner}>
          <p className={styles.empty}>설치사례를 준비 중입니다.</p>
        </div>
      </section>
    );
  }

  const visibleItems = isExpanded ? items : items.slice(0, VISIBLE_LIMIT);
  const hasMore = items.length > VISIBLE_LIMIT;

  return (
    <section id="cases" className={styles.cases}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {visibleItems.map((item, index) => (
            <CaseCard key={`${item.name}-${index}`} image={item.image} name={item.name} />
          ))}
        </div>

        {hasMore && !isExpanded && (
          <button
            type="button"
            className={styles.moreButton}
            onClick={() => setIsExpanded(true)}
          >
            더보기
          </button>
        )}
      </div>
    </section>
  );
}
