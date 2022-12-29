import React from "react";

export default function Main() {
  return (
    <div>
      <header className="header-space d-flex flex-column align-items-center container-fluid">
        <h2 className="header-text mt-5">Ip Address Tracker</h2>

        <div className="input-ip mt-3">
          <input
            type="text"
            className="input-text py-2 ps-3"
            placeholder="Search for any IP address or domain"
          />
          <button type="submit" className="input-submit p-2">
            <img src={require("../images/icon-arrow.svg").default} alt="" />
          </button>
        </div>
      </header>
      <div className="container-sm details d-flex justify-content-center">
        <div className="contents">
          <div className="bordered">
            <small className="small">IP ADDRESS</small>
            <h1 className="text">192.212.174.101</h1>
          </div>
        </div>
        <div className="contents">
          <div className="bordered">
            <small className="small">LOCATION</small>
            <h1 className="text">
              BROOKLYN NY, <hr /> 100001
            </h1>
          </div>
        </div>
        <div className="contents">
          <div className="bordered">
            <small className="small">TIMEZONE</small>
            <h1 className="text">UTC-5:00</h1>
          </div>
        </div>
        <div className="contents">
          <div className="bordered">
            <small className="small">ISP</small>
            <h1 className="text">
              SPACEX <hr /> STARLINK
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
