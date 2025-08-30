import { Navbar, Hero, Services, About, Testimonials, CTA, Footer, SiteVideo } from "@/components/site";
import { ElasticSection } from "@/components/elastic-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ElasticSection>
          <Hero />
        </ElasticSection>
        <ElasticSection>
          <section id="services">
            <Services />
          </section>
        </ElasticSection>
        <ElasticSection>
          <SiteVideo />
          <section id="about">
            <About />
          </section>
        </ElasticSection>
        <ElasticSection>
          <section id="testimonials">
            <Testimonials />
          </section>
        </ElasticSection>
        <ElasticSection>
          <section id="contact">
            <CTA />
          </section>
        </ElasticSection>
      </main>
      <Footer />
    </>
  );
}
