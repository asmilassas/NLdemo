import React from "react";
import { Award, Compass, HeartHandshake, MapPin } from "lucide-react";

const POINTS = [
  { icon: Compass, title: "Local route experts", desc: "Born and raised in Sri Lanka, our guides know the hidden viewpoints, the best tables and the quiet roads." },
  { icon: HeartHandshake, title: "Personal, never rushed", desc: "Every trip is private and built around your pace, not a fixed group schedule." },
  { icon: Award, title: "Licensed and insured", desc: "Certified chauffeur-guides, modern air-conditioned vehicles and full tourist insurance." },
];

/* Change this one colour to make the About background lighter or darker */
const BG = "#DCE8FA";

export default function About() {
  return (
    <section id="about" className="section-spacing" style={{ background: BG }}>
      <div className="container two">
        <div className="abt-media">
          <div className="ph">
            <img className="img-cover" src="/images/destination-sigiriya.jpg" alt="Sigiriya Lion Rock rising above the jungle" />
          </div>
          <div className="ph2">
            <img className="img-cover" src="/images/gallery-train.jpg" alt="Blue train crossing the Nine Arch Bridge in Ella" />
          </div>
          <div className="badge">
            <b>15 min</b>
            <span style={{ display: "flex", gap: 4, alignItems: "center" }}><MapPin size={13} /> from CMB Airport</span>
          </div>
        </div>
        <div>
          <div className="eyebrow"><span>About NL Lanka</span></div>
          <h2 className="section-title abt-title">Your Negombo-based team for the whole island</h2>
          <p className="section-desc abt-desc">Based in Negombo, minutes from the airport, we plan private tours, airport transfers and stays with people we know personally, so your holiday runs smoothly from arrival to departure.</p>
          {POINTS.map(({ icon: Icon, title, desc }) => (
            <div className="ft" key={title}>
              <div className="ico"><Icon size={24} /></div>
              <div><h4>{title}</h4><p>{desc}</p></div>
            </div>
          ))}
          <a href="#contact" className="btn btn-primary btn-lg" style={{ marginTop: 32 }}>Talk to our team</a>
        </div>
      </div>
      <style>{`
        #about .ico { background: #FFFFFF; }
      `}</style>
    </section>
  );
}