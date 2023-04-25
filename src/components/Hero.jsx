import React from "react";
import heroPhoto from "../assets/photo-grid.png"

export default function Hero(){
    return(
        <section className="hero">
            <img src={heroPhoto} alt="hero-section-photo" className="hero--photo" />
            <h1 className="hero--header" >Online Experiences</h1>
            <p className="hero--text" >Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home. Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
        </section>
    )
}