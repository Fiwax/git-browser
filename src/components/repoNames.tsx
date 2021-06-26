import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "./header";
import { Irepos, IuseParams } from "../types/interfaces";

const RepoNames = () => {
  const { userName } = useParams<IuseParams>();
  const [repoNames, setRepoNames] = useState<Irepos[]>([]);

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) =>
      setRepoNames(data)
    );
  }, [userName]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="repo-list__content">
          {repoNames
            .sort((a: any, b: any) => a.name - b.name)
            .map((it) => (
              <ul className="repo-list" key={it.id}>
                <li className="repo-list__item">
                  <Link
                    to={`/${userName}/${it.name}`}
                    className="repo-list__link"
                  >
                    {it.name}
                  </Link>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RepoNames;
