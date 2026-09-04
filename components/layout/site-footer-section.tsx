import content from "@/content.json";
import styles from "./site-footer-section.module.css";

const FALLBACK_TEXT = "정보 준비 중";

function displayValue(value: string) {
  return value.length > 0 ? value : FALLBACK_TEXT;
}

export default function SiteFooterSection() {
  const { footer } = content;

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.companyName}>{footer.companyName}</p>
        <dl className={styles.infoList}>
          <div className={styles.infoRow}>
            <dt>주소</dt>
            <dd>{displayValue(footer.address)}</dd>
          </div>
          <div className={styles.infoRow}>
            <dt>대표전화</dt>
            <dd>{displayValue(footer.phone)}</dd>
          </div>
          <div className={styles.infoRow}>
            <dt>이메일</dt>
            <dd>{displayValue(footer.email)}</dd>
          </div>
          <div className={styles.infoRow}>
            <dt>사업자등록번호</dt>
            <dd>{displayValue(footer.businessRegistrationNumber)}</dd>
          </div>
        </dl>
      </div>
    </footer>
  );
}
