import ServicesHero from "../ServicesHero";
import ResDetails from "./ResDetails";
import SolarProcess from "./SolarProcess";

export default function Residential() {
  return (
    <div>
      <ServicesHero
        title="Residential Solar Solutions"
        subtitle="Smart Energy for Your Home – Save Money & Go Green"
        bgImage="/solar3.jpg"
      />
      <ResDetails />
      <SolarProcess />
    </div>
  );
}
