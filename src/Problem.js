import { inventory } from './data/inventory.js';
import * as React from 'react';
import { Tab, Button, Icon, Modal } from 'semantic-ui-react';
import * as Comlink from 'comlink';
/* eslint-disable import/no-webpack-loader-syntax */
import Worker from 'worker-loader!./worker';
import EditorMain from './EditorMain.js';
import EditorSecondary from './EditorSecondary.js';
import { useStopwatch } from 'react-timer-hook';
import { useParams, useHistory } from 'react-router-dom';
import { hasOutstandingProblemIds, grabNextProblemId } from './problemIds.js';
import { constructTest, convertToSeconds, convertToTimer, colorCodeTime } from './util.js';
import { submitResult } from './personalBests';
import { addToSessionHistory } from './sessionHistory.js';
import { useStorageState } from 'react-storage-hooks';
import TabPanes from './TabPanes.js';
import TabCards from './TabCards.js';

const COMMENT = '  //';

function Problem() {
  const history = useHistory();
  const propRefs = React.useRef({});
  const [moveToNextModal, setMoveToNextModal] = React.useState(false);
  const [value, setValue] = useStorageState(sessionStorage, 'editorMainValue', '');
  const [value2, setValue2] = useStorageState(sessionStorage, 'editorSecondaryState', '');
  const [results, setResults] = useStorageState(sessionStorage, 'testResults', []);
  const [revealButtonPressed, setRevealButtonPressed] = useStorageState(
    sessionStorage,
    'revealButtonPressed',
    false,
  );
  const [isBusyTesting, setIsBusyTesting] = React.useState(false);
  const [activeIndex, setActiveIndex] = useStorageState(sessionStorage, 'activeTabIndex', 0);
  const { seconds, minutes, hours, start, pause, reset } = useStopwatch({
    autoStart: true,
    offsetTimestamp: new Date().setSeconds(
      new Date().getSeconds() + Number(sessionStorage.getItem('savedSeconds') || 0),
    ),
  });

  sessionStorage.setItem('savedSeconds', convertToSeconds(hours, minutes, seconds));

  const { id } = useParams();
  const data = inventory[id];

  let passedTests = 0;
  for (let result of results) {
    if (result.ok) {
      passedTests++;
    }
  }

  const totalTests = data.testCases.length;

  const showNextButton = totalTests === passedTests;

  const hasNext = hasOutstandingProblemIds();

  const clickSkip = () => {
    const revealButtonPressed = propRefs.current.revealButtonPressed;

    if (!revealButtonPressed) {
      const entry = { id, seconds: null };
      addToSessionHistory(entry);
    }
    reset();
    sessionStorage.setItem('savedSeconds', 0);
    start();
    setRevealButtonPressed(false);
    setActiveIndex(0);
    setValue('');
    setResults([]);
    history.push(`/${grabNextProblemId()}`);
  };

  const clickSkipToResults = () => {
    const revealButtonPressed = propRefs.current.revealButtonPressed;

    if (!revealButtonPressed) {
      const entry = { id, seconds: null };
      addToSessionHistory(entry);
    }
    reset();
    sessionStorage.setItem('savedSeconds', 0);
    start();
    setRevealButtonPressed(false);
    setActiveIndex(0);
    setValue('');
    setResults([]);
    // hack to make sure the sessionStorage state is updated fully before navigating away from component
    window.setTimeout(() => {
      history.push(`/sessionStats`);
    }, 1);
  };

  const revealAnswer = () => {
    const data = propRefs.current.data;

    setRevealButtonPressed(true);
    pause();
    const entry = { id, seconds: null };
    addToSessionHistory(entry);

    // code to reveal
    const transform = data.solution.solutionLines.map(line => {
      return line.text;
    });
    setValue2(transform.join('\n'));
  };

  const clickNext = () => {
    reset();
    sessionStorage.setItem('savedSeconds', 0);
    start();
    setRevealButtonPressed(false);
    setActiveIndex(0);
    setValue('');
    setResults([]);
    history.push(`/${grabNextProblemId()}`);
  };

  const clickNextToResults = () => {
    setRevealButtonPressed(false);
    setActiveIndex(0);
    setValue('');
    setResults([]);
    reset();
    sessionStorage.setItem('savedSeconds', 0);
    // hack to make sure the sessionStorage state is updated fully before navigating away from component
    window.setTimeout(() => {
      history.push(`/sessionStats`);
    }, 1);
  };

  // run tests
  const clickRun = async function (propRefs) {
    const data = propRefs.current.data;
    const value = propRefs.current.value;
    const id = propRefs.current.id;
    const hours = propRefs.current.hours;
    const minutes = propRefs.current.minutes;
    const seconds = propRefs.current.seconds;

    // for each test
    setResults([]);
    setActiveIndex(1);
    setIsBusyTesting(true);
    const promisedResults = data.testCases.map(async test => {
      // run sandbox code in a worker
      const worker = new Worker();
      const obj = Comlink.wrap(worker);
      let error = '';
      const response = obj
        .evaluate(value + constructTest(data.testCases, test.inherit, test.code, test.evaluate))
        .catch(e => {
          error = e.message;
        });
      const timeout = new Promise((resolve, reject) => {
        setTimeout(reject, data.maxExecutionTime * 1000, new Error('Timeout'));
      }).catch(e => {
        error = e.message;
      });
      const val = await Promise.race([response, timeout]);
      obj[Comlink.releaseProxy]();
      worker.terminate();

      // update test result
      let representation = '';
      if (typeof val === 'object') {
        representation = JSON.stringify(val);
      } else {
        representation = val;
      }

      // determine if actual === expected
      const ok = test.expected === representation;

      // format for display in table
      const presentation =
        typeof representation !== 'string' ? JSON.stringify(representation) : representation;

      return { ...test, actual: presentation, error, ok };
    });

    await Promise.all(promisedResults).then(r => {
      setResults(r);
      setIsBusyTesting(false);

      if (r.every(d => d.ok) && !revealButtonPressed) {
        pause();
        const entry = { id, seconds: convertToSeconds(hours, minutes, seconds) };
        addToSessionHistory(entry);
        submitResult(entry);
        setRevealButtonPressed(true);
        setMoveToNextModal(true);
      }
    });
  };

  if (!data) {
    return <p>Problem Not Found</p>;
  }

  // if nothing in main editor, place minimal in there.
  if (!value) {
    const transform = [];
    data.solution.solutionLines.forEach(line => {
      if (line.stage === 0) {
        transform.push(line.text);
      }
    });
    setValue(transform.join('\n'));
  }

  // check timer, get expected state for editor2.  if different than what is currently there, change it.
  const totalSeconds = convertToSeconds(hours, minutes, seconds);

  let durationIndex = 0;
  for (let [index, duration] of data.solution.stages.entries()) {
    if (totalSeconds >= duration) {
      durationIndex = index;
    }
  }

  if (revealButtonPressed) {
    durationIndex = Infinity;
  }

  const transform = data.solution.solutionLines
    .map(line => {
      if (line.stage <= durationIndex) {
        return line.text;
      }
      return COMMENT;
    })
    .join('\n');

  if (JSON.stringify(value2) !== JSON.stringify(transform)) {
    setValue2(transform);
  }

  // update object for use in editor shortcuts (and other places to avoid stale data)
  propRefs.current.value = value;
  propRefs.current.data = data;
  propRefs.current.id = id;
  propRefs.current.hours = hours;
  propRefs.current.minutes = minutes;
  propRefs.current.seconds = seconds;
  propRefs.current.revealButtonPressed = revealButtonPressed;
  propRefs.current.results = results;
  propRefs.current.isBusyTesting = isBusyTesting;

  const panes = TabPanes(
    propRefs,
    clickSkip,
    revealAnswer,
    clickSkipToResults,
    clickNext,
    clickNextToResults,
  );

  return (
    <React.Fragment>
      <Modal size="tiny" onClose={() => setMoveToNextModal(false)} open={moveToNextModal}>
        <Modal.Header>
          &#127881; Congratulations!{' '}
          <span style={{ marginLeft: '20px', fontWeight: 'normal' }}>All Tests Passed!</span>
        </Modal.Header>
        <Modal.Content style={{ width: '85%', margin: '0 auto 50px auto', maxWidth: '400px' }}>
          <Button
            autoFocus
            style={{ width: '115px', float: 'left' }}
            onClick={() => {
              setMoveToNextModal(false);
              hasNext ? clickNext() : clickNextToResults();
            }}
          >
            {hasNext ? 'Next' : 'Results'}
          </Button>
          <Button
            style={{ width: '115px', float: 'right' }}
            onClick={() => setMoveToNextModal(false)}
          >
            Wait Here
          </Button>
        </Modal.Content>
      </Modal>
      <div style={{ padding: '1vh 1vw' }}>
        <div style={{ height: 'calc(35vh - 40px)', padding: '1vh 0 1vh 0vw' }}>
          <TabCards data={data} isBusyTesting={isBusyTesting} results={results} id={id} />
        </div>
        {/* <div style={{ position: 'absolute', top: '28vh', left: '1vw' }}>
          <Button.Group>
            <Button icon onClick={() => clickRun(propRefs)}>
              <Icon
                name="rocket"
                className={isBusyTesting ? 'animate-icon' : ''}
                disabled={isBusyTesting || revealButtonPressed}
              />
            </Button>
            {showNextButton && hasNext ? (
              <Button icon onClick={clickNext}>
                <Icon name="step forward" />
              </Button>
            ) : showNextButton ? (
              <Button icon onClick={clickNextToResults}>
                <Icon name="file alternate outline" />
              </Button>
            ) : null}
          </Button.Group>
        </div> */}
        {/* <div style={{ position: 'absolute', top: '29vh', left: '15vw' }}>
          <div
            style={{
              fontSize: '1.5em',
              display: 'block',
            }}
          >
            <span style={{ color: colorCodeTime(totalSeconds, data) }}>
              {convertToTimer(totalSeconds)}
            </span>
          </div>
        </div> */}
        <div className="editor-area columns">
          <div className="editor-area column">
            <EditorMain setValue={setValue} clickRun={clickRun} value={value} propRefs={propRefs} />
          </div>
          <div className="column">
            <EditorSecondary value2={value2} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Problem;
