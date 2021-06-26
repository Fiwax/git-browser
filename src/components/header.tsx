import React from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";
import { IuseParams } from "../types/interfaces";

const Header: React.FC = () => {
  const { userName, repositoryName } = useParams<IuseParams>();
  return (
    <header className="header">
      <div className="header__content">
        <nav className="nav-list">
          {userName && <span className="nav-list__item">{userName}</span>}
          {userName && (
            <Link className="nav-list__item" to="/">
              Back
            </Link>
          )}
          {userName && repositoryName && (
            <Link
              id="#go-repository-list"
              className="nav-list__item"
              to={`/${userName}`}
            >
              Go repositoryList
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
