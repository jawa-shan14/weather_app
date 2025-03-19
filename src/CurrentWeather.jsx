import { useEffect, useState } from "react";

const CurrentWeather = ({ currentWeather }) => {
  const [iconSrc, setIconSrc] = useState("");

  useEffect(() => {
    if (!currentWeather.weatherIcon) return;

    // Try to load .svg first
    const svgPath = `/icons/${currentWeather.weatherIcon}.svg`;
    const pngPath = `/icons/${currentWeather.weatherIcon}.png`;

    // Check if the .svg file exists
    fetch(svgPath, { method: "HEAD" })
      .then(response => {
        if (response.ok) {
          setIconSrc(svgPath);
        } else {
          setIconSrc(pngPath); // Fallback to .png if .svg doesn't exist
        }
      })
      .catch(() => setIconSrc(pngPath)); // Fallback to .png if .svg check fails
  }, [currentWeather.weatherIcon]);

  if (!currentWeather.temperature) return null;

  return (
    <div className="current-weather">
      <img src={iconSrc} className="weather-icon" alt="Weather Icon" />
      <h2 className="temperature">
        {currentWeather.temperature} <span>°C</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;
