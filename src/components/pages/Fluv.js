import React from "react";
import '../Service.css';

export default function Flux() {
    return (
        <div className="service-container">
            <img className="service-image" src='/images/river.jpg' alt='River' />
            <div className="service-text">
                <h2>Fluvial geomorphology</h2>
                <p className="lighter-font">
                    Fluvial geomorphology is the study of the processes that shape and influence river systems. At Lynmoore Consultants, we specialize in unraveling the complexities of river dynamics, understanding how natural forces shape river landscapes over time.
                </p>
                <h2>Who could benefit from our services</h2>
                <p className="lighter-font">
                    We help councils and other clients seek our expertise to gain a comprehensive understanding of their local river systems. Our services provide vital insights into the unique spatial and temporal characteristics of rivers, helping clients make informed decisions for land use planning, environmental conservation, and disaster prevention.
                </p>
                <h2>How we help</h2>
                <p className="lighter-font">
                    Our consultancy goes beyond analysis; we offer tailored solutions to address the specific challenges posed by river systems. By leveraging our expertise in fluvial geomorphology, we assist clients in devising strategic plans that mitigate risks, prevent catastrophes, and ensure sustainable development along river corridors.
                </p>
            </div>
        </div>
    );
}
