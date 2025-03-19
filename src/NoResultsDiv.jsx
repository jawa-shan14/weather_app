const NoResultsDiv = () => {
  return (
    <div className="no-results">
      <img src="icons/no-result.svg" alt="No results found" className="icon" />
      <h3 className="title">City Not Found!</h3>
      <p className="message">Try entering a valid city name.</p>
    </div>
  );
};

export default NoResultsDiv;
