import content from "@/content.json";
import BusinessHeroBlock from "./business-hero-block";

export default function BusinessSection() {
  const { items } = content.business;

  return (
    <section id="business">
      {items.map((item, index) => (
        <BusinessHeroBlock
          key={item.id}
          id={`business-${item.id}`}
          name={item.name}
          slogan={item.slogan}
          image={item.image}
          align={index % 2 === 0 ? "left" : "right"}
          withTopDivider={index > 0}
        />
      ))}
    </section>
  );
}
