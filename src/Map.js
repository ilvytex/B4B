import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as restData from "./data/testmap.json";

export const Map = () => {


  const [viewport, setViewport] = useState({
    latitude: 41.397,
    longitude: 2.158,
    zoom: 12,
    width: '100vw',
    height: '500px',
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
    <div>
      <ReactMapGL {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiaWx2eXRleCIsImEiOiJja2RiZDZrdTEwd2RtMnNtaWt4aTZxYWZpIn0.Zu-PxbdmJasdmEY5f1zMTQ" // {process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/ilvytex/ckd8rdgy20zvd1ipjw1smcjyd"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {restData.features.map(venue => (
          <Marker
            key={venue.properties.Station_id}
            latitude={venue.properties.Station_lat}
            longitude={venue.properties.Station_lng}>

            <button className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedVenue(venue);
              }}
            >
              <img src="/local_cafe-black-24dp.svg" alt="Coffee Icon" />
            </button>

          </Marker>
        ))}

        {selectedVenue ? (
          <Popup
            latitude={selectedVenue.properties.Station_lat}
            longitude={selectedVenue.properties.Station_lng}
            onClose={() => {
              setSelectedVenue(null);
            }}
          >
            <div>
              <h3>{selectedVenue.properties.Station_name}</h3>
              <p>{selectedVenue.properties.Station_address}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );

}

export default Map;
