import React from "react";
import { MapPin } from "lucide-react";
import { GALLERY } from "../data.js";

export default function Gallery() {
  return (
    <section id="gallery" className="section-spacing bg-ice">
      <div className="container">
        <div className="section-header center">
          <div className="eyebrow"><span>Gallery</span></div>
          <h2 className="section-title">Moments from the island</h2>
          <p className="section-desc center">A glimpse of what waits for you on the road.</p>
        </div>
        <div className="gal">
          {GALLERY.map((g) => (
            <figure className="gi" key={g.title} style={{ margin: 0 }}>
              <img className="img-cover" src={g.src} alt={g.title} loading="lazy" />
              <div><b>{g.title}</b><span><MapPin size={12} /> {g.subtitle}</span></div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
