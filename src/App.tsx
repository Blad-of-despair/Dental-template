import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
import { clinic } from "./data/yashoda";
import { MessageCircle, Phone } from "lucide-react";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Booking />
        <Footer />
      </main>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href={`https://wa.me/${clinic.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-colors focus-visible-ring"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} strokeWidth={2} />
        </a>
        <a
          href={`tel:${clinic.phone}`}
          className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-colors focus-visible-ring"
          aria-label="Call"
        >
          <Phone size={24} strokeWidth={2} />
        </a>
      </div>
    </>
  );
}
