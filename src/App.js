import React, { useState, useEffect } from "react";

function FestivalList() {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    fetch("https://corsproxy.io/?https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals")
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Failed to fetch festivals");
        }
        return response.json();
      })
      .then(data => setFestivals(data))
      .catch(error => console.error(error));
  }, []);

  function renderFestivals() {
    const festivalsByLabel = {};
    festivals.forEach(festival => {
      festival.bands.forEach(band => {
        const label = band.recordLabel || "No record label";
        if (!festivalsByLabel[label]) {
          festivalsByLabel[label] = {};
        }
        if (!festivalsByLabel[label][band.name]) {
          festivalsByLabel[label][band.name] = [];
        }
        festivalsByLabel[label][band.name].push(festival.name);
      });
    });
    const labels = Object.keys(festivalsByLabel).sort();
    return labels.map(label => (
      <div key={label}>
        <h2>{label}</h2>
        {Object.keys(festivalsByLabel[label]).sort().map(bandName => (
          <div key={bandName} style={{marginLeft: "2em"}}>
            <p>{bandName}</p>
            {festivalsByLabel[label][bandName].sort().map(festivalName => (
              <p key={festivalName} style={{marginLeft: "4em"}}>{festivalName}</p>
            ))}
          </div>
        ))}
      </div>
    ));
  }

  return <div>{renderFestivals()}</div>;
}

export default FestivalList;
