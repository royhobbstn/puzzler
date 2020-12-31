import * as React from 'react';
import Problem from './Game/Problem.js';
import SessionStats from './SessionStats.js';
// import { Button } from 'semantic-ui-react';
import { Switch, Route, useHistory } from 'react-router-dom';
import MainMenu from './MainMenu.js';
import HomePage from './Home/HomePage.js';

function App() {
  let history = useHistory();
  const propRefs = React.useRef({});
  propRefs.current.history = history;

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <MainMenu propRefs={propRefs} />
          <HomePage propRefs={propRefs} />
        </Route>
        <Route exact path="/sessionStats" children={<SessionStats />} />
        <Route exact path="/:id">
          <MainMenu propRefs={propRefs} />
          <Problem propRefs={propRefs} />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
