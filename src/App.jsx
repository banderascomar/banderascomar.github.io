import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const handleClick = (e) => {
    const url = "https://wa.me/+5491171910777";

    const callback = () => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-955758454/GbT3CO6d0tMaEPbu3scD',
        event_callback: callback
      });
    } else {
      // fallback si gtag no está definido
      callback();
    }
  };

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Gallery data={landingPageData.Gallery}/>
      <About data={landingPageData.About} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />

      <a
        onClick={handleClick}
        href="https://wa.me/+5491171910777"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default App;
