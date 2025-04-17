"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";

const GTM_ID = "GTM-TWPXHTR9";

const GoogleTagManager = () => {
  useEffect(() => {
    const consent = Cookies.get("userConsent");
    if (consent === "accepted") {
      // Inject GTM script into <head>
      const script = document.createElement("script");
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `;
      document.head.appendChild(script);

      // Inject the <noscript> fallback into <body> for non-JS users
      const noscript = document.createElement("noscript");
      noscript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;
      document.body.appendChild(noscript);
    }
  }, []);

  return null;
};

export default GoogleTagManager;
