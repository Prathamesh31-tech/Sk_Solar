import React from "react";
import "./SolarMap.css";

const SolarMap = () => {
  return (
    <section className="map-section">
      <div className="map-content-header">
        <h2 className="map-title">Our Work Locations</h2>
        <div className="yellow-dash"></div>
      </div>

      {/* Full Width Map Wrapper */}
      <div className="map-frame-container">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1huhRCflsdPevx3fhhjCFhTk9AYygECU&ehbc=2E312F"
          className="full-map-iframe"
          title="Solar Installations Map"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default SolarMap;
