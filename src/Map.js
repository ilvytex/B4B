import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as restData from "./data/testmap.json";
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

export const Map = () => {

  const [viewport, setViewport] = useState({
    latitude: 41.397,
    longitude: 2.17,
    zoom: 13,
    width: '100%',
    height: '40vh',
  })

  const [selectedVenue, setSelectedVenue] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedVenue(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div style={{ minWidth: 500 }}>
      <ReactMapGL {...viewport} maxZoom={18}
        mapboxApiAccessToken="pk.eyJ1IjoiaWx2eXRleCIsImEiOiJja2RiZDZrdTEwd2RtMnNtaWt4aTZxYWZpIn0.Zu-PxbdmJasdmEY5f1zMTQ"
        mapStyle="mapbox://styles/ilvytex/ckd8rdgy20zvd1ipjw1smcjyd"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {restData.features.map(venue => (
          <Marker
            key={venue.properties.Station_id}
            latitude={venue.properties.Station_lat}
            longitude={venue.properties.Station_lng}
          >
            <button className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedVenue(venue);
              }}
            >
              <img src="/bike.svg" alt="Bike Icon" />
            </button>
          </Marker>
        ))}
        {selectedVenue ? (
          <Popup
            latitude={selectedVenue.properties.Station_lat}
            longitude={selectedVenue.properties.Station_lng}
            onClose={() => {
              setSelectedVenue(null);
            }} className="apple-popup"
          >
            <div className="popup">
              <a target="blank" href={selectedVenue.properties.URL}>
                <img className="markerphoto" src={selectedVenue.properties.photo} alt={selectedVenue.properties.Sation_name} />
              </a>
              <h3>{selectedVenue.properties.Station_name}</h3>
              <a target="blank" href={selectedVenue.properties.URL}></a>
              <p>{selectedVenue.properties.Station_address}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default Map;