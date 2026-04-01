import ProductHero from "../ProductHero";
import AdaniDetails from "./AdaniDetails";
import AdaniWhy from "./AdaniWhy";

export default function Adani() {
  return (
    <div>
      <ProductHero
        title="Adani Solar Panels"
        subtitle="Powering India with Clean & Smart Energy"
        bgImage="/solar6.jpg"
      />
      <AdaniDetails />
      <AdaniWhy />
    </div>
  );
}
