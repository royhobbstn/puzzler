import * as React from 'react';
import { Menu, Button, Icon, Popup } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { convertToTimer, colorCodeTime } from './util.js';
import { useParams, useHistory } from 'react-router-dom';
import { inventory } from './data/inventory.js';
import { clickRun } from './redux/thunks';
import {
  clickNextToResults,
  clickSkipToResults,
  clickNext,
  clickSkip,
  revealAnswer,
} from './redux/gameStore';
import { shiftSelection } from './redux/filterStore';

function MainMenu({
  isBusyTesting,
  revealButtonPressed,
  results,
  clickRun,
  clickNext,
  totalSeconds,
  clickSkip,
  clickSkipToResults,
  revealAnswer,
  clickNextToResults,
  selections,
  shiftSelection,
}) {
  const history = useHistory();
  const { id } = useParams();
  const data = inventory[id];

  let passedTests = 0;
  for (let result of results) {
    if (result.ok) {
      passedTests++;
    }
  }

  const totalTests = data && data.testCases && data.testCases.length;
  const showNextButton = totalTests === passedTests;
  const hasNext = Boolean(selections && selections.length > 0);
  const passedAllTests = results.length > 0 && results.every(d => d.ok);

  return (
    <Menu>
      {data && id ? (
        <Menu.Item>
          <Button.Group>
            <Popup
              content="Home"
              trigger={
                <Button
                  icon
                  onClick={() => {
                    history.push('/');
                  }}
                >
                  <Icon name="home" />
                </Button>
              }
            />
          </Button.Group>
        </Menu.Item>
      ) : null}
      <Menu.Item>
        <span style={{ fontWeight: 'bolder', fontSize: '20px', fontVariant: 'small-caps' }}>
          Puzzler
        </span>
      </Menu.Item>
      {data && id ? (
        <React.Fragment>
          <Menu.Item>
            <Button.Group>
              <Popup
                content="Run Tests"
                trigger={
                  <Button
                    icon
                    onClick={() => {
                      if (!isBusyTesting && !revealButtonPressed) {
                        clickRun(id);
                      }
                    }}
                    disabled={isBusyTesting || revealButtonPressed}
                  >
                    <Icon name="rocket" className={isBusyTesting ? 'animate-icon' : ''} />
                  </Button>
                }
              />

              <Popup
                content="Proceed to Next Problem"
                trigger={
                  <Button
                    icon
                    onClick={() => {
                      if (showNextButton) {
                        if (hasNext) {
                          const nextId = selections[0];
                          clickNext(id);
                          shiftSelection();
                          history.push(`/${nextId}`);
                        } else {
                          clickNextToResults(id);
                          history.push(`/sessionStats`);
                        }
                      }
                    }}
                    disabled={!showNextButton}
                  >
                    <Icon name="step forward" />
                  </Button>
                }
              />
            </Button.Group>
          </Menu.Item>

          <Menu.Item>
            <span
              style={{
                color: colorCodeTime(totalSeconds, data, revealButtonPressed, passedAllTests),
              }}
            >
              {convertToTimer(totalSeconds)}
            </span>
            {contextMessage(revealButtonPressed, passedAllTests)}
          </Menu.Item>

          {!hasNext ? (
            <Menu.Item>
              <span
                style={{
                  fontWeight: 'bold',
                  color: 'orange',
                }}
              >
                Last Problem
              </span>
            </Menu.Item>
          ) : null}

          <Menu.Item>
            <Button.Group>
              <Popup
                content="Reveal Solution"
                trigger={
                  <Button
                    icon
                    onClick={() => {
                      if (!revealButtonPressed && !passedAllTests) {
                        revealAnswer({ id, data });
                      }
                    }}
                    disabled={revealButtonPressed || passedAllTests}
                  >
                    <Icon name="eye" />
                  </Button>
                }
              />
            </Button.Group>
          </Menu.Item>

          <Menu.Item>
            <Button.Group>
              <Popup
                content="Skip this Problem"
                trigger={
                  <Button
                    icon
                    onClick={() => {
                      if (!passedAllTests) {
                        if (hasNext) {
                          const nextId = selections[0];
                          clickSkip(id);
                          shiftSelection();
                          history.push(`/${nextId}`);
                        } else {
                          clickSkipToResults(id);
                          history.push(`/sessionStats`);
                        }
                      }
                    }}
                    disabled={passedAllTests}
                  >
                    <Icon name="fast forward" />
                  </Button>
                }
              />
            </Button.Group>
          </Menu.Item>
        </React.Fragment>
      ) : null}

      <Menu.Item position="right">
        <Popup
          content="See Session Stats"
          trigger={
            <Button
              icon
              onClick={() => {
                // if not on homepage
                if (id) {
                  clickSkipToResults(id);
                }
                history.push('/sessionStats');
              }}
            >
              <Icon name="file alternate outline" />
            </Button>
          }
        />
      </Menu.Item>
    </Menu>
  );
}

function contextMessage(revealButtonPressed, passedAllTests) {
  if (passedAllTests) {
    return <span style={{ color: 'green', fontWeight: 'bold' }}>- PASSED!</span>;
  } else if (revealButtonPressed) {
    return <span style={{ color: 'red' }}>- Stopped</span>;
  } else {
    return null;
  }
}

const mapStateToProps = (state, props) => {
  return {
    value: state.game.value,
    isBusyTesting: state.game.isBusyTesting,
    revealButtonPressed: state.game.revealButtonPressed,
    results: state.game.results,
    totalSeconds: state.game.totalSeconds,
    //
    selections: state.filter.selections,
  };
};

const mapDispatchToProps = {
  clickRun,
  clickNext,
  clickSkipToResults,
  revealAnswer,
  clickSkip,
  clickNextToResults,
  shiftSelection,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
