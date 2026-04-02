import ProductHero from "../ProductHero";
import UtlDetails from "./UtlDetails";
import UtlStats from "./UtlStats";

export default function UTL() {
  return (
    <div>
      <ProductHero
        title="UTL Solar Panels"
        subtitle="Reliable & Affordable Solar Power Solutions for Every Home"
        bgImage="/solar5.jpg"
      />
      <UtlDetails />
      <UtlStats />
    </div>
  );
}
