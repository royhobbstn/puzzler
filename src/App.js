import * as React from 'react';
import Problem from './Problem.js';
import SessionStats from './SessionStats.js';
import { Button, Menu } from 'semantic-ui-react';
import { Switch, Route, useHistory } from 'react-router-dom';

function App() {
  let history = useHistory();

  function handleMenuClick() {
    console.log('clickeroo');
  }

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
    <React.Fragment>
      <Menu>
        <Menu.Item name="editorials" onClick={handleMenuClick}>
          Editorials
        </Menu.Item>

        <Menu.Item name="reviews" onClick={handleMenuClick}>
          Reviews
        </Menu.Item>

        <Menu.Item name="upcomingEvents" onClick={handleMenuClick}>
          Upcoming Events
        </Menu.Item>
      </Menu>
      <Switch>
        <Route exact path="/">
          <div>
            <Button onClick={() => startApp()}>Start</Button>
          </div>
        </Route>
        <Route exact path="/sessionStats" children={<SessionStats />} />
        <Route exact path="/:id" children={<Problem />} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
