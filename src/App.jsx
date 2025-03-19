import SearchSection from "./components/SearchSection";
import CurrentWeather from "./CurrentWeather";
import { useRef, useState } from "react";
import NoResultsDiv from "./NoResultsDiv";

const fakeWeatherData = {
    // 🌆 North India Cities
    delhi: { temperature: 25, description: "Rainy", weatherIcon: "rain" },
    chandigarh: { temperature: 22, description: "Pleasant", weatherIcon: "sun" },
    jaipur: { temperature: 35, description: "Sunny", weatherIcon: "sun" },
    lucknow: { temperature: 18, description: "Foggy", weatherIcon: "fog" },
    varanasi: { temperature: 30, description: "Humid", weatherIcon: "humid" },
    shimla: { temperature: -2, description: "Snowy", weatherIcon: "snow" },
    dehradun: { temperature: 20, description: "Cloudy", weatherIcon: "cloud" },
    amritsar: { temperature: 15, description: "Chilly", weatherIcon: "wind" },
    agra: { temperature: 28, description: "Windy", weatherIcon: "wind" },
    patna: { temperature: 27, description: "Hazy", weatherIcon: "haze" },
  
    // 🌇 South India Cities
    chennai: { temperature: 35, description: "Hottest", weatherIcon: "sun" },
    bangalore: { temperature: 24, description: "Pleasant", weatherIcon: "sun" },
    hyderabad: { temperature: 29, description: "Warm", weatherIcon: "hot" },
    kochi: { temperature: 26, description: "Rainy", weatherIcon: "rain" },
    thiruvananthapuram: { temperature: 30, description: "Humid", weatherIcon: "humid" },
    mysore: { temperature: 22, description: "Cool", weatherIcon: "wind" },
    visakhapatnam: { temperature: 27, description: "Cloudy", weatherIcon: "cloud" },
    madurai: { temperature: 33, description: "Dry", weatherIcon: "dry" },
    coimbatore: { temperature: 25, description: "Breezy", weatherIcon: "wind" },
    mangalore: { temperature: 28, description: "Thunderstorm", weatherIcon: "storm" },
  };

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hasNoResults, setHasNoResults] = useState(false);
  const searchInputRef = useRef(null);

  const getWeatherDetails = (cityName) => {
    setHasNoResults(false);
    if (window.innerWidth <= 768) searchInputRef.current?.blur();

    const city = cityName.toLowerCase();

    if (fakeWeatherData[city]) {
      setCurrentWeather(fakeWeatherData[city]);
    } else {
      setHasNoResults(true);
    }
  };

  return (
    <div className="container">
      <SearchSection getWeatherDetails={getWeatherDetails} searchInputRef={searchInputRef} />
      {hasNoResults ? (
        <NoResultsDiv />
      ) : (
        <div className="weather-section">
          <CurrentWeather currentWeather={currentWeather} />
        </div>
      )}
    </div>
  );
};

export default App;
