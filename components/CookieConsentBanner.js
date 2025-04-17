"use client";
import React from "react";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";
import Link from "next/link";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="userConsent"
      style={{ background: "#2B373B", fontSize: "18px", padding: "20px" }}
      buttonStyle={{ color: "#FFF", fontSize: "18px", backgroundColor: "#00BB00" }}
      declineButtonStyle={{ color: "#fff", fontSize: "18px" }}
      expires={365}
      onAccept={() => {
        Cookies.set("userConsent", "accepted", { expires: 365 });
        // Initialize Google Analytics or other tracking services here
      }}
      onDecline={() => {
        Cookies.set("userConsent", "declined", { expires: 365 });
        // Disable tracking services here
      }}
    >
      This website uses cookies and Google Analytics to enhance the user experience.{" "}
      <Link href="/privacy" style={{ color: "#ddd", textDecoration: "underline" }}>
        Learn more
      </Link>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
