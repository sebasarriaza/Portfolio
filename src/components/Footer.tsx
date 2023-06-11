"use client";
import React, { useEffect, useState } from "react";
import { animateScroll as scroll, Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById("footerContent");

      if (footerElement) {
        const footerPosition = footerElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const margin = 1; // Ajusta el margen adicional antes de mostrar el footer

        setShowFooter(footerPosition <= windowHeight + margin);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Element id="footerContent" name="footer">
      {showFooter && (
        <div className="fixed w-full bottom-0 flex justify-between p-5 lg:px-8">
            <p>© 2023 Sebas Arriaza</p>
          <div>
            <button onClick={scroll.scrollToTop}>
              <FontAwesomeIcon className="w-8" icon={faArrowUp} />
              Back to top
              </button>
          </div>
        </div>
      )}
    </Element>
  );
};

export default Footer;
