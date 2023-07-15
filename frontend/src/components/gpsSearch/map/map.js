import React from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import MyMarker from "./myMarker";
import './map.css'

// implementation of this function is needed for codesandbox example to work
// you can remove it otherwise
const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const points = [
  {
    id: 1,
    title: "Round Pond",
    lat: -1.1886271819006988,
    lng: 36.932010187656616,
  },
  {
    id: 2,
    title: "The Long Water",
    lat: -1.2707625895025487,
    lng: 36.817241297670805,
  },
  
];

export default function App() {

   const { isLoaded } = useLoadScript({
     googleMapsApiKey: "AIzaSyDSMDqx6HgCylt6KnlHdf1-QPeKY7GW5kU",
   });
    if (!isLoaded) return <div>Loading...</div>;

    return <Map />;

function Map() {
  return (
    <div className="App">
      <GoogleMap
        defaultCenter={{ lat: -1.2769476811310503, lng: 36.81720222954108 }}
        defaultZoom={15}
      >
        {points.map(({ lat, lng, id, title }) => {
          return (
            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
          );
        })}
      </GoogleMap>
    </div>
  );
}

}
 