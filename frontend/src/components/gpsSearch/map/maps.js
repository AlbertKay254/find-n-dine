import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";

import './map.css'
import CustomMarker from "../../../assets/icon2.png"

const Maps = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDSMDqx6HgCylt6KnlHdf1-QPeKY7GW5kU",
  });
  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
};

const markers = [
  {
    name: "KFC Kahawa Sukari",
    location: {
      lat: -1.1886271819006988,
      lng: 36.932010187656616,
    },
  },
  {
    name: "Bamboo Cask Lounge",
    location: {
      lat: -1.2707625895025487,
      lng: 36.817241297670805,
    },
  },
  {
    name: "Yolo Ice Cream",
    location: {
      lat: -1.2870923974532438,
      lng: 36.82557706756905,
    },
  },
  {
    name: "moyo's restaurant",
    location: {
      lat: -1.1891109370970363,
      lng: 36.932605978858284,
    },
  },
  {
    name: "Chandarana Foodplus",
    location: {
      lat: -1.2602363830215313,
      lng: 36.841105598708985,
    },
  },
  {
    name: "Zuchini Groceries",
    location: {
      lat: -1.2909020696406623,
      lng: 36.762617617221785,
    },
  },
  {
    name: "JavaHouse TRM",
    location: {
      lat: -1.219683364052313,
      lng:  36.8886389769794,
    },
  },
];

function Map() {
  const center = useMemo(
    () => ({
      lat: -1.2769476811310503,
      lng: 36.81720222954108,
    }),
    []
  );

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [showInfoWindow, setInfoWindow] = useState(true);

  return (
    <div className="max-width">
      <div className="collection-title">Map Section</div>
      <GoogleMap
        mapContainerClassName="map max-width"
        zoom={11}
        center={center}
      >
        {markers.map((marker) => {
          return (
            <div key={marker.name}>
              <MarkerF
                position={marker.location}
                title={marker.name}
                onClick={(props, markers) => {
                  setSelectedMarker(marker);
                  setActiveMarker(markers);
                }}
              />
            </div>
          );
        })}
        {selectedMarker ? (
          <InfoWindow
            position={selectedMarker.location}
            visible={showInfoWindow}
            markers={activeMarker}
            onCloseClick={() => {
              setSelectedMarker(null);
            }}
          >
            <div>
              <h1>location : {selectedMarker.name}</h1>
            </div>
          </InfoWindow>
        ) : null}
        {/*
        <div className="my-location-icon">
          <MarkerF
            position={{ lat: -1.1776953356136166, lng: 36.930077753520855 }}
            options={{
              icon: CustomMarker,
            }}
          />
        </div>
        */}
      </GoogleMap>
    </div>
  );
}
export default Maps;
