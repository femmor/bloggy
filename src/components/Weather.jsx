import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";
import { AiFillSun } from "react-icons/ai";


import "../assets/styles/Weather.css";

const Weather = () => {
  return (
    <div className="weather">
      <div className="search">
        <div className="search-top">
          <FaLocationDot />
          <div className="location">Dallas, Texas</div>
        </div>
        <div className="search-location">
          <input type="text" placeholder="Enter location" />
          <FaMagnifyingGlass />
        </div>
      </div>
      <div className="weather-data">
        <AiFillSun />
        <div className="weather-type">Clear</div>
        <div className="temp"> 28°</div>
      </div>
    </div>
  );
};
export default Weather;
