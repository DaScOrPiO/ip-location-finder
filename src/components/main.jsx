import { React, useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import MapPosition from "./mapPosition";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Main() {
  const [Input, setInput] = useState("");
  const [Address, setAddress] = useState(null);

  const alert = () =>
    toast(`Value not a valid IP address or domain`, {
      position: "top-center",
      autoClose: false,
    });

  const val = `192.212.174.101`;
  const reset = () => {
    alert();
  };

  const IpAddressRegEX =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const DomainRegEX =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${val}`
        );
        const data = res.data;
        setAddress(data);
      } catch (err) {
        const alert = () =>
          toast(`Can't process request right now :( please try again soon`, {
            position: "top-center",
          });
        alert();
      }
    };
    getLocation();
  }, [val]);

  const handleChange = async (e) => {
    const res = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        process.env.REACT_APP_API_KEY
      }&${
        IpAddressRegEX.test(Input)
          ? `ipAddress=${Input}`
          : DomainRegEX.test(Input)
          ? `domain=${Input}`
          : `ipAddress=${reset()}`
      }`
    );
    const data = res.data;
    setAddress(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange();
    console.log(Input);
  };

  return (
    <div>
      <header className="header-space d-flex flex-column align-items-center container-fluid">
        <h2 className="header-text mt-5">Ip Address Tracker</h2>

        <div className="input-ip mt-3">
          <input
            type="text"
            className="input-text py-2 ps-3"
            placeholder="Search for any IP address or domain"
            onChange={(e) => setInput(e.target.value)}
            value={Input}
          />
          <button
            type="submit"
            className="input-submit p-2"
            onClick={handleSubmit}
          >
            <img src={require("../images/icon-arrow.svg").default} alt="" />
          </button>
        </div>

        <ToastContainer position="top-center" autoClose={false} />
      </header>
      {Address && (
        <>
          <div className="container-sm details d-flex justify-content-center">
            <div className="contents">
              <div className="bordered">
                <small className="small">IP ADDRESS</small>
                <h1 className="text">{Address.ip}</h1>
              </div>
            </div>
            <div className="contents">
              <div className="bordered">
                <small className="small">LOCATION</small>
                <h1 className="text">
                  {Address.location.region}, <hr />
                  {Address.location.postalCode}
                </h1>
              </div>
            </div>
            <div className="contents">
              <div className="bordered">
                <small className="small">TIMEZONE</small>
                <h1 className="text">{Address.location.timezone}</h1>
              </div>
            </div>
            <div className="contents">
              <div className="bordered">
                <small className="small">ISP</small>
                <h1 className="text">{Address.isp}</h1>
              </div>
            </div>
          </div>

          <MapContainer
            center={[Address.location.lat, Address.location.lng]}
            zoom={5}
            scrollWheelZoom={true}
            className="MapContainer mt-n6"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapPosition address={Address} location={Address.location.region} />
          </MapContainer>
        </>
      )}
    </div>
  );
}
