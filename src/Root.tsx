import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/main";
import RepoNames from "./components/repoNames";
import ReadmeFile from "./components/readmeFile";

const Root: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:userName" component={() => <RepoNames />} />
        <Route
          exact
          path="/:userName/:repositoryName"
          component={() => <ReadmeFile />}
        />
      </Switch>
    </Router>
  );
};

export default Root;
