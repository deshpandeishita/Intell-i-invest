import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Fuse from "fuse.js"; 
import { FaSearch } from "react-icons/fa";
import "../assets/autocomplete.css";

const AutocompleteInput = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [didYouMean, setDidYouMean] = useState("");     

  useEffect(() => {
    fetch("/listing_status.csv") 
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            const companies = result.data
              .map((row) => ({
                name: row.name,
                symbol: row.symbol,  // Extract symbol from CSV
              }))
              .filter((company) => company.name && company.symbol); // Remove empty values

            console.log("Loaded Companies:", companies); // Debugging
            setData(companies);
          },
        });
      })
      .catch((error) => console.error("CSV Load Error:", error));
  }, []);

  const fuse = data.length > 0 ? new Fuse(data, { keys: ["name", "symbol"], includeScore: true, threshold: 0.3 }) : null;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (fuse && value) {
      const filtered = fuse.search(value).map((result) => result.item);
      console.log("Suggestions:", filtered); 
      setSuggestions(filtered.slice(0, 5));

      if (filtered.length > 0 && filtered[0].name.toLowerCase() !== value.toLowerCase()) {
        setDidYouMean(`${filtered[0].name} (${filtered[0].symbol})`);
      } else {
        setDidYouMean("");
      }
    } else {
      setSuggestions([]);
      setDidYouMean("");
    }
  };

  const handleSuggestionClick = (company) => {
    console.log("Selected:", company); // Debugging
    setInputValue(`${company.name} (${company.symbol})`);
    setSuggestions([]);
    setDidYouMean("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      handleSuggestionClick(suggestions[0]);
    }
  };

  const handleSearchClick = () => {
    if (suggestions.length > 0) {
      handleSuggestionClick(suggestions[0]);
    }
  };

  return (
    <div className="parent-container">
      <div className="autocomplete-wrapper"> 
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter the stock name"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="input-box"
          />
          <FaSearch className="search-icon" onClick={handleSearchClick} />
        </div>

        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((company, index) => (
              <li key={index} onClick={() => handleSuggestionClick(company)}>
                {company.name} ({company.symbol})
              </li>
            ))}
          </ul>
        )}

        {didYouMean && (
          <p className="did-you-mean" onClick={() => handleSuggestionClick({ name: didYouMean.split(" (")[0], symbol: didYouMean.split("(")[1].replace(")", "") })}>
            Did you mean: <strong>{didYouMean}</strong>?
          </p>
        )}
      </div>
    </div>
  );
};

export default AutocompleteInput;
