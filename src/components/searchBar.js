import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui inverted segment">
      <form onSubmit={onSubmit} className="ui form">
        <label className="ui red ribbon big label">
          <i className="search icon"> </i>
          search your videos here
        </label>

        <p />
        <div className="ui field">
          <div className="ui icon input">
            <input
              type="text"
              value={term}
              onChange={onInputChange}
              placeholder="enter your video here..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
