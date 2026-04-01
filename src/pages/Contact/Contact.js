import ProductHero from "../products/ProductHero";
import ContactPage from "./ContactPage";
import SolarMap from "./SolarMap";

export default function Contact() {
  return (
    <div>
      <ProductHero
        title="Contact SK Solar"
        subtitle="Switch to clean and renewable solar energy"
        bgImage="/contact.jpeg"
      />
      <ContactPage />
      <SolarMap />
    </div>
  );
}
