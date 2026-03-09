import { useEffect } from "react";
import './testimonial.css'
const TestimonialSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
    <div className="testimonial-section">
      <div className="elfsight-app-4c7e414f-42da-42be-bbb0-76e8d2e12490 " data-elfsight-app-lazy></div>
    </div>
    </>

  );
}

export default TestimonialSection
