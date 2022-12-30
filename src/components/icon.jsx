import L from "leaflet";
import icon from "../images/icon-location.svg";

export default L.icon({
  iconSize: [20, 40],
  iconAnchor: [10, 40],
  popupAnchor: [5, -30],
  iconUrl: icon,
});
