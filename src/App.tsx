import * as React from 'react';
import Problem from './Game/Problem';
import SessionStats from './SessionStats';
import HistoricStats from './HistoricStats';
import { Switch, Route } from 'react-router-dom';
import MainMenu from './MainMenu';
import HomePage from './Home/HomePage';
import { incrementTotalSeconds } from './redux/gameStore';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import ProblemTextModal from './ProblemTextModal';
import { HOME_PAGE, SESSION_STATS_PAGE, HISTORIC_STATS_PAGE, GAME_PAGE } from './util';

let interval = 0;

function App() {
  const dispatch = useDispatch();
  const isRunning = useSelector((state: RootStateOrAny) => state.game.isRunning);

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
        <Route exact path={HOME_PAGE}>
          <MainMenu page={HOME_PAGE} />
          <HomePage />
        </Route>
        <Route exact path={SESSION_STATS_PAGE}>
          <MainMenu page={SESSION_STATS_PAGE} />
          <SessionStats />
        </Route>
        <Route exact path={HISTORIC_STATS_PAGE}>
          <MainMenu page={HISTORIC_STATS_PAGE} />
          <HistoricStats />
        </Route>
        <Route exact path={GAME_PAGE}>
          <MainMenu page={GAME_PAGE} />
          <Problem />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
