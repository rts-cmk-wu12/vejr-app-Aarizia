import { useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { getWeatherData } from "./utilities/getWeatherData";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { FaSun } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { FaCloudSunRain } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { GiSnowing } from "react-icons/gi";
import {iso31661} from 'iso-3166';

function App() {

  const cityInputRef = useRef();
  const countryInputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);

  const allIcons = {
      '01d': <FaSun className="weather-icon yellow" />,
      '01n': <FaSun className="weather-icon yellow" />,
      '02d': <FaCloudSun className="weather-icon" />,
      '02n': <FaCloudSun className="weather-icon" />,
      '03d': <FaCloudSun className="weather-icon" />,
      '03n': <FaCloudSun className="weather-icon" />,
      '04d': <FaCloudSunRain className="weather-icon" />,
      '04n': <FaCloudSunRain className="weather-icon" />,
      '09d': <FaCloudRain className="weather-icon blue" />,
      '09n': <FaCloudRain className="weather-icon blue" />,
      '10d': <FaCloudRain className="weather-icon blue" />,
      '10n': <FaCloudRain className="weather-icon blue" />,
      '13d': <GiSnowing className="weather-icon" />,
      '13n': <GiSnowing className="weather-icon" />
  }
  
  async function submitHandler(event) {
    event.preventDefault();
    
    const data = await getWeatherData(cityInputRef.current.value, countryInputRef.current.value);
    setWeatherData(data);
    document.activeElement.blur();
    event.target.reset();

  }

  return (
    <>
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
        <section className="search">
          <h2>Search city and country</h2>
          <form onSubmit={submitHandler} className="search-form">
            <label>
              City or area
              <input ref={cityInputRef} type="text" />
            </label>
            <label>
              Country code
              <input ref={countryInputRef} type="text" list={iso31661} />
              <datalist id={iso31661}>
                {iso31661.map(countryCode => {
                  return (
                    <option key={countryCode.alpha2} value={countryCode.alpha2}>{countryCode.name}</option>
                  )
                })}
              </datalist>
            </label>
            <button><IoSearchOutline /></button>
          </form>
        </section>
        {weatherData &&
        <section className="weather">
            <h2>Weather data for<span className="line-break padding-top">{weatherData.city}, {weatherData.country}</span></h2>
            {allIcons[weatherData.icon] || <FaSun />}
            <p className="weather-temperature">{weatherData.temperature}°c</p>
            <div className="weather-details__container">
              <div className="weather-details">
                <WiHumidity className="weather-details__icon" />
                <p>{weatherData.humidity}%<span className="line-break">humidity</span></p>
              </div>
              <div className="weather-details">
                <p>{weatherData.windSpeed}km/h<span className="line-break text-align-right">wind speed</span></p>
                <FiWind className="weather-details__icon" />
              </div>
            </div>
        </section>
        }
      </main>
      <footer>
        <small>Developed by Emma Lindekilde 2025</small>
      </footer>
    </>
  )
}

export default App
