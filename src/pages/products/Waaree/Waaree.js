import ProductHero from "../ProductHero";
import WaareeDetails from "./WaareeDetails";
import WaareeSpecs from "./WaareeSpecs";
import ContactCTA from "./ContactCTA";

export default function Waaree() {
  return (
    <div>
      <ProductHero
        title="Waaree Solar Panels"
        subtitle="India’s Leading Solar Panel Manufacturer"
        bgImage="/solar5.jpg"
      />
      <WaareeDetails />
      <WaareeSpecs />
      <ContactCTA />
    </div>
  );
}
