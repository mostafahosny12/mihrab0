import React from "react";
import "../styles/whatsapp.css";
const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/201553135708"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="fab fa-whatsapp"></i>

        </a>
    );
};

export default WhatsAppButton;
