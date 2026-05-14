import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Booking from "../components/Booking";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Booking />
      <Footer />
    </>
  );
}