import React, { useState, useEffect } from "react";
import "../styles/scrollToTop.css";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // تابع السكروول
    const toggleVisibility = () => {
        if (window.scrollY > 300) { // يظهر بعد 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // حركة سلسة
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
