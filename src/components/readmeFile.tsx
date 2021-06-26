import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { IuseParams } from "../types/interfaces";
import Header from "./header";
import "../App.css";

const ReadmeFile: React.FC = () => {
  const [data, setData] = useState<string>("");

  const { repositoryName, userName } = useParams<IuseParams>();

  useEffect(() => {
    axios(
      `https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`
    ).then(({ data }) => setData(data));
  }, [repositoryName, userName]);
  return (
    <div>
      <Header />
      <div className="container">
        <div id="description" className="description">
          <ReactMarkdown>{data}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
export default ReadmeFile;
