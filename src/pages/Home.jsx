import Footer from "../components/sections/Footer";
import FAQ from "../components/sections/FAQ";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import WhyChoose from "../components/sections/WhyChoose";
import AIAssistant from "../components/sections/AIAssistant";
import Exercises from "../components/sections/Exercises";
import FeatureCards from "../components/sections/FeatureCards";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCards />
      <Exercises />
      <AIAssistant />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;