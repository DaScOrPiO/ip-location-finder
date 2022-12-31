import { Marker, Popup, useMap } from "react-leaflet";
import icon from "./icon";
import { React, useEffect, useMemo } from "react";

export default function MapPosition(props) {
  const location = useMemo(() => {
    return [props.address.location.lat, props.address.location.lng];
  }, [props.address.location.lat, props.address.location.lng]);
  const map = useMap();

  useEffect(() => {
    map.flyTo(location, 15, {
      animate: true,
    });
  }, [map, location]);

  return (
    <>
      <Marker icon={icon} position={location}>
        <Popup>
          Current location is <br /> {props.location}.
        </Popup>
      </Marker>
    </>
  );
}
