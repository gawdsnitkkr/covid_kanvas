import React from "react";

import "./head.css";

const head = (props) => {
  const header = props.data.map((info) => {
    return (
      <div className="Head" key={info.statecode}>
        <div className="ConfirmedData section">
          <h1 className="label">Confirmed</h1>
          <div className="numbers">{info.confirmed}</div>
        </div>
        <div className="ActiveData section">
          <h1 className="label">Active</h1>
          <div className="numbers">{info.active}</div>
        </div>
        <div className="RecoveredData section">
          <h1 className="label">Recovered</h1>
          <div className="numbers">{info.recovered}</div>
        </div>
        <div className="DeathsData section">
          <h1 className="label">Deaths</h1>
          <div className="numbers">{info.deaths}</div>
        </div>
      </div>
    );
  });
  return <div className="Header">{header}</div>;
};

export default head;
