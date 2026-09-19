import Hero from "../components/Hero";
import Services from "../components/Services";
import Results from "../components/Results";
import Testimonials from "../components/Testimonials";
import ClientLogos from "../components/ClientLogos";
import HomeBlog from "../components/HomeBlog";
import CTA from "../components/CTA";

/**
 * Home page:
 * Hero (+ live analytics telemetry) →
 * What We Do (core services) →
 * What We Deliver (measurable KPIs) →
 * Trusted By Industry Leaders (clients & verticals) →
 * Client Success Stories (genuine testimonials) →
 * Latest From Our Blog (insights & knowledge) →
 * CTA.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Results />
      <ClientLogos />
      <Testimonials />
      <HomeBlog />
      <CTA />
    </>
  );
}
