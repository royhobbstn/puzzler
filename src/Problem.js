import { inventory } from './data/inventory.js';
import * as React from 'react';
import { Tab, Button, Icon } from 'semantic-ui-react';
import * as Comlink from 'comlink';
/* eslint-disable import/no-webpack-loader-syntax */
import Worker from 'worker-loader!./worker';
import EditorMain from './EditorMain.js';
import EditorSecondary from './EditorSecondary.js';
import TabPanes from './TabPanes.js';
import { useStopwatch } from 'react-timer-hook';
import { useParams, useHistory } from 'react-router-dom';
import { hasOutstandingProblemIds, grabNextProblemId } from './problemSet.js';
import { constructTest } from './util.js';

const COMMENT = '  //';

function Problem() {
  let history = useHistory();
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [isBusyTesting, setIsBusyTesting] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { seconds, minutes, hours, start, pause, reset } = useStopwatch({
    autoStart: true,
  });
  let { id } = useParams();

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

  function clickNext() {
    // todo record time as personal best if applicable
    reset();
    start();
    history.push(`/${grabNextProblemId()}`);
    setActiveIndex(0);
  }

  // run tests
  const clickRun = async () => {
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

      if (r.every(d => d.ok)) {
        pause();
      }
    });
  };

  const panes = TabPanes(data, results, start, reset, setActiveIndex, isBusyTesting, id);

  // gradually show lines from the solution
  React.useEffect(() => {
    if (!data) {
      return;
    }
    setResults([]);
    for (let [index, duration] of data.solution.stages.entries()) {
      window.setTimeout(() => {
        const transform = data.solution.solutions[0].solutionLines.map(line => {
          if (line.stage <= index) {
            return line.text;
          }
          return COMMENT;
        });

        setValue2(transform.join('\n'));

        if (index === 0) {
          setValue(transform.filter(d => d !== COMMENT).join('\n'));
        }
      }, duration * 1000);
    }
  }, [data]);

  if (!data) {
    return <p>Problem Not Found</p>;
  }

  return (
    <div style={{ padding: '1vh 1vw' }}>
      <div style={{ height: '36vh', padding: '1vh 0 1vh 0vw' }}>
        <Tab
          menu={{ fluid: true, vertical: true }}
          onTabChange={(e, { activeIndex }) => {
            setActiveIndex(activeIndex);
          }}
          activeIndex={activeIndex}
          panes={panes}
        />
      </div>
      <div style={{ position: 'absolute', top: '28vh', left: '1vw' }}>
        <Button.Group>
          <Button icon onClick={clickRun}>
            <Icon
              name="cog"
              className={isBusyTesting ? 'animate-icon' : ''}
              disabled={isBusyTesting}
            />
          </Button>
          {showNextButton && hasNext ? (
            <Button icon onClick={clickNext}>
              <Icon name="step forward" />
            </Button>
          ) : null}
        </Button.Group>
      </div>
      <div style={{ position: 'absolute', top: '29vh', left: '15vw' }}>
        <div
          style={{
            fontSize: '1.5em',
            display: 'block',
          }}
        >
          <span>{hours}</span>:<span>{minutes < 10 ? '0' + minutes : minutes}</span>:
          <span>{seconds < 10 ? '0' + seconds : seconds}</span>
        </div>
      </div>
      <div className="editor-area columns">
        <div className="editor-area column">
          <EditorMain value={value} setValue={setValue} />
        </div>
        <div className="column">
          <EditorSecondary value2={value2} />
        </div>
      </div>
    </div>
  );
}

export default Problem;
