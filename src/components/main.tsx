import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import "../App.css";

const Main: React.FC = () => {
  const [username, setUsername] = useState<string>("");

  return (
    <div>
      <Header />
      <div className="form">
        <form className="form-search">
          <input
            className="form-search__input"
            type="text"
            id="input-field"
            placeholder="username.."
            onChange={(e) => setUsername(e.target.value)}
          />
          <Link
            className="form-search__link"
            id="search-button"
            to={`/${username}`}
          >
            Search
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Main;
