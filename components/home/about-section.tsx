import content from "@/content.json";
import AboutValueCard from "./about-value-card";
import styles from "./about-section.module.css";

export default function AboutSection() {
  const { about } = content;

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <p className={styles.body}>{about.body}</p>
        </div>
        <div className={styles.cards}>
          {about.values.map((value) => (
            <AboutValueCard
              key={value.keyword}
              icon={value.icon}
              letter={value.letter}
              keyword={value.keyword}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
