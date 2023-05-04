import React, { useState } from "react";

const apiKey = "46a1ca2d7c69459f8d3181126232903";
const url = "https://api.weatherapi.com/v1/current.json?";

function Search() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [img, setImg] = useState("cloud");

  const handleClick = () => {
    fetch(`${url}key=${apiKey}&q=${city}`)
      .then((res) => res.json())
      .then((data) => setData(data));
      setImg(city)
      setCity("");
  };

  return (
    <div className="background" 
    style={{ backgroundImage: `url(https://source.unsplash.com/1920x1080/?${img})`}}>
    <div className="box">
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Search for city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button onClick={handleClick}>
          search
          </button>
      </div>
      {data === null ? (
        <p className="emptySearch">
          Write a city name to see the weather.
          </p>
      ) : (
        <div className="result">
          <h1>
            Weather in {data.location.name}, {data.location.country}
          </h1>
        <div className="temperature">  
          <h1>
            Condition <br/>
            {data.current.condition.text} <br/>
            <img alt="" src={data.current.condition.icon}/>
          </h1>
          <h1>
            Temperature is <br />
            {data.current.temp_c} °C
          </h1>
          <h1>
            Temperature feels like <br/>
            {data.current.feelslike_c} °C
          </h1>
          <h1>
            Wind speed <br />
            {data.current.wind_kph} km/h
          </h1>
          </div>
          <div className="airCondition">
          <h1>
            UV <br />
            {data.current.uv}
          </h1>
          <h1>
            Pressure <br/>
            {data.current.pressure_mb} mb
          </h1>
          <h1>
            Humidity <br />
            {data.current.humidity} %
          </h1>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Search;
