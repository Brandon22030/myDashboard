// import "../";
import { useState } from "react";
import axios from "axios";

function Weather() {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e97f951e70e630ff7acc4a8b0001fb6d`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app p-4 bg-white rounded-lg shadow">
      <input
        className="outline"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyUp={searchLocation}
        type="text"
        name=""
        id=""
      />

      <div>
        <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
          <div className="font-bold text-xl">{data.name ? data.name : 'Town'}</div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl">{data.main ? <p>{Math.round(data.main.feels_like - 273.15)}°C</p> : null}</div>
            <div className="flex flex-col items-center ml-6">
              <div>Cloudy</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up"></i>
                </span>
                <span className="text-sm font-light text-gray-500">{data.clouds ? <p>{data.clouds["all"]}°C</p> : null}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind Speed</div>
              <div className="text-sm text-gray-500">{data.wind ? <p>{data.wind["speed"]} MPH</p> : null}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">{data.main ? <p>{data.main.humidity}%</p> : null}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500">{data.visibility ? <p>{data.visibility}m</p> : null}</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div classNameName="p-4 bg-white rounded-lg shadow"> */}
      {/* <h2 className="text-xl font-semibold">
        {data.name ? data.name : "data.name"}
      </h2>
      <p className="mt-2 text-gray-600">Check your sales data.</p> */}
      {/* </div> */}
    </div>
  );
}

export default Weather;