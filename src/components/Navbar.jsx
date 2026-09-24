import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY_INFO } from "../data.js";

const LINKS = [["Journeys", "journeys"], ["Plan", "plan"], ["Services", "services"], ["Gallery", "gallery"], ["Reviews", "reviews"], ["Contact", "contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"nb" + (scrolled ? " sc" : "")}>
      <div className="container nb-in">
        <a href="#home" className="brand">
          <img src={logo} alt="NL Lanka logo" />
          <span><b>NL Lanka</b><small>Travel &amp; Tours</small></span>
        </a>
        <nav className={"nl" + (open ? " open" : "")} onClick={() => setOpen(false)}>
          {LINKS.map(([label, id]) => <a key={id} href={"#" + id}>{label}</a>)}
          <a href={"tel:" + COMPANY_INFO.phone.replace(/\s/g, "")} style={{ display: "flex", gap: 6, alignItems: "center", color: "var(--royal)", fontWeight: 600 }}>
            <Phone size={15} /> {COMPANY_INFO.phone}
          </a>
          <a href="#plan" className="btn btn-primary btn-sm">Plan my trip</a>
        </nav>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
