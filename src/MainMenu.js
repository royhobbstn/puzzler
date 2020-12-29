import * as React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { convertToTimer, colorCodeTime } from './util.js';
import { useParams, useHistory } from 'react-router-dom';
import { inventory } from './data/inventory.js';
import { hasOutstandingProblemIds } from './problemIds.js';

import {
  clickNext,
  clickNextToResults,
  clickRun,
  clickSkipToResults,
  revealAnswer,
  clickSkip,
} from './thunks.js';

function MainMenu({
  propRefs,
  isBusyTesting,
  revealButtonPressed,
  results,
  clickRun,
  clickNext,
  clickNextToResults,
  totalSeconds,
  clickSkip,
  clickSkipToResults,
  revealAnswer,
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
  const hasNext = hasOutstandingProblemIds();
  const passedAllTests = results.length === true && results.every(d => d.ok);
  console.log(results.every(d => d.ok));
  console.log({ revealButtonPressed, passedAllTests, hasNext, showNextButton });

  return (
    <Menu>
      {data && id ? (
        <Menu.Item>
          <Button.Group>
            <Button
              icon
              onClick={() => {
                history.push('/');
              }}
            >
              <Icon name="home" />
            </Button>
          </Button.Group>
        </Menu.Item>
      ) : null}
      <Menu.Item content="Puzzler" />
      {data && id ? (
        <React.Fragment>
          <Menu.Item>
            <Button.Group>
              <Button
                icon
                onClick={() => {
                  if (!isBusyTesting && !revealButtonPressed) {
                    clickRun(propRefs);
                  }
                }}
                disabled={isBusyTesting || revealButtonPressed}
              >
                <Icon name="rocket" className={isBusyTesting ? 'animate-icon' : ''} />
              </Button>

              <Button
                icon
                onClick={() => {
                  if (showNextButton && hasNext) {
                    clickNext(propRefs);
                  }
                }}
                disabled={!showNextButton || !hasNext}
              >
                <Icon name="step forward" />
              </Button>
            </Button.Group>
          </Menu.Item>

          <Menu.Item>
            <span style={{ color: colorCodeTime(totalSeconds, data) }}>
              {convertToTimer(totalSeconds)}
            </span>
          </Menu.Item>

          <Menu.Item>
            <Button.Group>
              <Button
                icon
                onClick={() => {
                  if (!revealButtonPressed && !passedAllTests) {
                    revealAnswer(propRefs);
                  }
                }}
                disabled={revealButtonPressed || passedAllTests}
              >
                <Icon name="eye" />
              </Button>
            </Button.Group>
          </Menu.Item>

          {hasNext && !passedAllTests ? (
            <Menu.Item>
              <Button.Group>
                <Button icon onClick={() => clickSkip(propRefs)}>
                  <Icon name="fast forward" />
                </Button>
              </Button.Group>
            </Menu.Item>
          ) : null}
        </React.Fragment>
      ) : null}

      <Menu.Item position="right">
        <Button
          icon
          onClick={() => {
            if (id && data) {
              clickSkipToResults(propRefs);
            } else {
              history.push('/sessionStats');
            }
          }}
        >
          <Icon name="file alternate outline" />
        </Button>
      </Menu.Item>
    </Menu>
  );
}

const mapStateToProps = (state, props) => {
  return {
    value: state.value,
    isBusyTesting: state.isBusyTesting,
    revealButtonPressed: state.revealButtonPressed,
    results: state.results,
    totalSeconds: state.totalSeconds,
    propRefs: props.propRefs,
  };
};

const mapDispatchToProps = {
  clickRun,
  clickNext,
  clickNextToResults,
  clickSkipToResults,
  revealAnswer,
  clickSkip,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
