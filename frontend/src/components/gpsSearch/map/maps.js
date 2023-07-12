import { useMemo } from "react";
import { GoogleMap , useLoadScript, MarkerF} from "@react-google-maps/api";

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDSMDqx6HgCylt6KnlHdf1-QPeKY7GW5kU",
  });
  if (!isLoaded) return <div>Loading...</div>
  
  return <Map />
}

function Map() {

  const center = useMemo(() => ({
    lat: -1.2769476811310503,
    lng: 36.81720222954108,
   }), []);

  return (
    <div className="max-width">
      <div className="collection-title">Map Section</div>
      <GoogleMap
        mapContainerClassName="map max-width"
        zoom={12}
        center={center}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
}
