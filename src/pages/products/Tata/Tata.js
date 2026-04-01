import ProductHero from "../ProductHero";
import TataDetails from "./TataDetails";
import TataSpecs from "./TataSpecs";
export default function Tata() {
  return (
    <div>
      <ProductHero
        title="Tata Power Solar"
        subtitle="India's Most Trusted Solar Brand"
        bgImage="/solar3.jpg"
      />
      <TataDetails />
      <TataSpecs />
    </div>
  );
}
