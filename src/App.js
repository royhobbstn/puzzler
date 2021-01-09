import * as React from 'react';
import Problem from './Game/Problem.js';
import SessionStats from './SessionStats.js';
import { Switch, Route } from 'react-router-dom';
import MainMenu from './MainMenu.js';
import HomePage from './Home/HomePage.js';
import { incrementTotalSeconds } from './redux/gameStore';
import { useDispatch, useSelector } from 'react-redux';
import ProblemTextModal from './ProblemTextModal';

let interval = null;

function App() {
  const dispatch = useDispatch();
  const isRunning = useSelector(state => state.game.isRunning);

  // timer implementation
  React.useEffect(() => {
    if (isRunning) {
      interval = window.setInterval(() => {
        dispatch(incrementTotalSeconds());
      }, 1000);
    } else if (interval) {
      window.clearInterval(interval);
    }
  }, [isRunning, dispatch]);

  return (
    <React.Fragment>
      <ProblemTextModal />
      <Switch>
        <Route exact path="/">
          <MainMenu />
          <HomePage />
        </Route>
        <Route exact path="/sessionStats" children={<SessionStats />} />
        <Route exact path="/:id">
          <MainMenu />
          <Problem />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
