import React, { useState, useEffect } from "react";
import "../styles/scrollToTop.css";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            className={`scroll-to-top ${isVisible ? "show" : ""}`}
            onClick={scrollToTop}
        >
            <i className="fa-solid fa-arrow-up"></i>

        </button>
    );
};

export default ScrollToTop;
