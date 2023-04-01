import React, { useState } from "react";

const apiKey = "46a1ca2d7c69459f8d3181126232903";
const url = "https://api.weatherapi.com/v1/current.json?";

function Search() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");

  const handleClick = () => {
    fetch(`${url}key=${apiKey}&q=${city}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    setCity("");
  };

  return (
    <div>
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Search for cities"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button onClick={handleClick} />
      </div>
      {data === null ? (
        <p>Write a city name to see the weather.</p>
      ) : (
        <div className="result">
          <h1>
            Country:
            <br />
            {data.location.country}
          </h1>
          <h1>
            Region:
            <br />
            {data.location.region}
          </h1>
          <h1>
            City: <br />
            {data.location.name}
          </h1>
          <h1>
            Temperature is <br />
            {data.current.temp_c} C°
          </h1>
          <h1>
            wind speed is <br />
            {data.current.wind_kph} km/h
          </h1>
          <h1>
            wind direction is: <br />
            {data.current.wind_dir}
          </h1>
          <h2>
            Cloud is <br />
            {data.current.cloud}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Search;
