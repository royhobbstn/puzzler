import * as React from 'react';
import Problem from './Problem.js';
import SessionStats from './SessionStats.js';
// import { Button } from 'semantic-ui-react';
import { Switch, Route, useHistory } from 'react-router-dom';
import MainMenu from './MainMenu.js';
import HomePage from './HomePage.js';

function App() {
  let history = useHistory();
  const propRefs = React.useRef({});
  propRefs.current.history = history;

  // const startApp = () => {
  //   // temporary
  //   sessionStorage.setItem('problemIds', JSON.stringify([1, 2, 3]));

  //   // get next
  //   const problemIdsRaw = sessionStorage.getItem('problemIds');
  //   if (!problemIdsRaw) {
  //     throw new Error('Out of problems error.');
  //   } else {
  //     const problemIds = JSON.parse(problemIdsRaw);
  //     const id = problemIds.shift();
  //     sessionStorage.setItem('problemIds', JSON.stringify(problemIds));
  //     history.push(`/${id}`);
  //   }
  // };

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <MainMenu propRefs={propRefs} />
          {/* <Button onClick={() => startApp()}>Start</Button> */}
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
