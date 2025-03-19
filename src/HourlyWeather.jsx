import { useEffect, useState } from "react";

const HourlyWeatherItem = ({ hourlyWeather }) => {
  const [iconSrc, setIconSrc] = useState("");
  const temperature = Math.floor(hourlyWeather.temp_c);
  let time = hourlyWeather.time.split(" ")[1].substring(0, 5);
  const weatherIcon = hourlyWeather.weatherIcon || "default";

  useEffect(() => {
    if (!weatherIcon) return;

    const svgPath = `/icons/${weatherIcon}.svg`;
    const pngPath = `/icons/${weatherIcon}.png`;

    fetch(svgPath, { method: "HEAD" })
      .then(response => {
        if (response.ok) {
          setIconSrc(svgPath);
        } else {
          setIconSrc(pngPath);
        }
      })
      .catch(() => setIconSrc(pngPath));
  }, [weatherIcon]);

  return (
    <li className="weather-item">
      <p className="time">{time}</p>
      <img src={iconSrc} className="weather-icon" alt="Weather Icon" />
      <p className="temperature">{temperature}°</p>
    </li>
  );
};

export default HourlyWeatherItem;
