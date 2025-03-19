const SearchSection = ({ getWeatherDetails, searchInputRef }) => {
  const handleCitySearch = (e) => {
    e.preventDefault();
    const input = e.target.querySelector(".search-input").value;
    getWeatherDetails(input);
  };

  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <span>🔍</span>
        <input type="search" placeholder="Enter a city name" className="search-input" ref={searchInputRef} required />
      </form>
    </div>
  );
};

export default SearchSection;
