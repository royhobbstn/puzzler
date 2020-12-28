import * as React from 'react';
import Problem from './Problem.js';
import SessionStats from './SessionStats.js';
import { Button } from 'semantic-ui-react';
import { Switch, Route, useHistory } from 'react-router-dom';

function App() {
  let history = useHistory();

  const startApp = () => {
    // temporary
    sessionStorage.setItem('problemIds', JSON.stringify([1, 2, 3]));

    // get next
    const problemIdsRaw = sessionStorage.getItem('problemIds');
    if (!problemIdsRaw) {
      throw new Error('Out of problems error.');
    } else {
      const problemIds = JSON.parse(problemIdsRaw);
      const id = problemIds.shift();
      sessionStorage.setItem('problemIds', JSON.stringify(problemIds));
      history.push(`/${id}`);
    }
  };

  return (
    <Switch>
      <Route exact path="/">
        <div>
          <Button onClick={() => startApp()}>Start</Button>
        </div>
      </Route>
      <Route exact path="/sessionStats" children={<SessionStats />} />
      <Route exact path="/:id" children={<Problem />} />
    </Switch>
  );
}

export default App;
