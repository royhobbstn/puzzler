import * as React from 'react';
import { Menu, Button, Icon, Popup } from 'semantic-ui-react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import {
  convertToTimer,
  colorCodeTime,
  HOME_PAGE,
  GAME_PAGE,
  SESSION_STATS_PAGE,
  HISTORIC_STATS_PAGE,
} from './util';
import { useParams, useHistory } from 'react-router-dom';
import { inventory } from './data/inventory';
import { clickRun as clickRunFunction } from './redux/thunks';
import {
  clickNextToResults,
  clickSkipToResults,
  clickNext,
  clickSkip,
  revealAnswer,
} from './redux/gameStore';
import { shiftSelection, pressReset } from './redux/filterStore';
import { TestCase } from './data/interface';

interface MainMenuProps {
  page: string;
}

type ClickRunFn = (id: string) => void;
const clickRun: ClickRunFn = clickRunFunction;

// { page: VALID_PAGE }
function MainMenu(props: MainMenuProps) {
  const { page } = props;
  const dispatch = useDispatch();
  const isBusyTesting = useSelector((state: RootStateOrAny) => state.game.isBusyTesting);
  const revealButtonPressed = useSelector(
    (state: RootStateOrAny) => state.game.revealButtonPressed,
  );
  const results = useSelector((state: RootStateOrAny) => state.game.results);
  const totalSeconds = useSelector((state: RootStateOrAny) => state.game.totalSeconds);
  const selections = useSelector((state: RootStateOrAny) => state.filter.selections);

  const history = useHistory();
  const { id } = useParams<{ id: string }>();
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
  const passedAllTests = results.length > 0 && results.every((d: TestCase) => d.ok);

  return (
    <Menu>
      {page !== HOME_PAGE ? (
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
      {page === HOME_PAGE ? (
        <Menu.Item>
          <Button.Group>
            <Popup
              content="Reset Filters"
              trigger={
                <Button
                  icon
                  onClick={() => {
                    dispatch(pressReset());
                  }}
                >
                  <Icon name="undo" />
                </Button>
              }
            />
          </Button.Group>
        </Menu.Item>
      ) : null}
      {page === GAME_PAGE ? (
        <React.Fragment>
          <Menu.Item>
            <Button.Group>
              <Popup
                content="Run Tests (ctrl-m)"
                trigger={
                  <Button
                    icon
                    onClick={() => {
                      if (!isBusyTesting && !revealButtonPressed) {
                        dispatch(clickRun(id));
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
                          dispatch(clickNext());
                          dispatch(shiftSelection());
                          history.push(`/${nextId}`);
                        } else {
                          dispatch(clickNextToResults());
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
                        dispatch(revealAnswer({ id, data }));
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
                          dispatch(clickSkip(id));
                          dispatch(shiftSelection());
                          history.push(`/${nextId}`);
                        } else {
                          dispatch(clickSkipToResults(id));
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
        {page !== SESSION_STATS_PAGE ? (
          <Popup
            content="See Session Stats"
            trigger={
              <Button
                icon
                style={{ marginRight: '10px' }}
                onClick={() => {
                  // if not on homepage
                  if (id) {
                    dispatch(clickSkipToResults(id));
                  }
                  history.push('/sessionStats');
                }}
              >
                <Icon name="file alternate outline" />
              </Button>
            }
          />
        ) : null}

        {page !== HISTORIC_STATS_PAGE ? (
          <Popup
            content="See Historic Stats"
            trigger={
              <Button
                icon
                onClick={() => {
                  // if not on homepage
                  if (id) {
                    dispatch(clickSkipToResults(id));
                  }
                  history.push('/historicStats');
                }}
              >
                <Icon name="history" />
              </Button>
            }
          />
        ) : null}
      </Menu.Item>
    </Menu>
  );
}

function contextMessage(revealButtonPressed: boolean, passedAllTests: boolean) {
  if (passedAllTests) {
    return <span style={{ color: 'green', fontWeight: 'bold' }}>- PASSED!</span>;
  } else if (revealButtonPressed) {
    return <span style={{ color: 'red' }}>- Stopped</span>;
  } else {
    return null;
  }
}

export default MainMenu;
