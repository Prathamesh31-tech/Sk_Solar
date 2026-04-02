import ProductHero from "../ProductHero";
import PremierSolar from "./PremierSolar";
import PremierStats from "./PremierStats";

export default function Premier() {
  return (
    <div>
      <ProductHero
        title="Premier Solar Panels"
        subtitle="Next-Generation Solar Efficiency for Smart Energy Solutions"
        bgImage="/solar3.jpg"
      />
      <PremierSolar />
      <PremierStats />
    </div>
  );
}
