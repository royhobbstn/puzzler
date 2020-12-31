import * as React from 'react';
import Problem from './Game/Problem.js';
import SessionStats from './SessionStats.js';
import { Switch, Route } from 'react-router-dom';
import MainMenu from './MainMenu.js';
import HomePage from './Home/HomePage.js';
import { incrementTotalSeconds } from './redux/gameStore';
import { connect } from 'react-redux';

let interval = null;

function App({ incrementTotalSeconds, isRunning }) {
  // timer implementation
  React.useEffect(() => {
    if (isRunning) {
      interval = window.setInterval(() => {
        incrementTotalSeconds();
      }, 1000);
    } else if (interval) {
      window.clearInterval(interval);
    }
  }, [incrementTotalSeconds, isRunning]);

  return (
    <React.Fragment>
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

const mapStateToProps = (state, props) => {
  return {
    isRunning: state.game.isRunning,
  };
};

const mapDispatchToProps = {
  incrementTotalSeconds,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
