import { data } from './data.js';
import * as React from 'react';
import { Tab } from 'semantic-ui-react';
import * as Comlink from 'comlink';
/* eslint-disable import/no-webpack-loader-syntax */
import Worker from 'worker-loader!./worker';
import EditorMain from './EditorMain.js';
import EditorSecondary from './EditorSecondary.js';
import TabPanes from './TabPanes.js';
import { useStopwatch } from 'react-timer-hook';

const COMMENT = '  //';

function App() {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [results, setResults] = React.useState([]);
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } = useStopwatch({
    autoStart: true,
  });

  // run tests
  const clickRun = async () => {
    // for each test
    const promisedResults = data.testCases.map(async (test, index) => {
      // run sandbox code in a worker
      const worker = new Worker();
      const obj = Comlink.wrap(worker);
      let error = '';
      const response = obj.evaluate(value + test.code).catch(e => {
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

      return { ...test, actual: representation, error, ok };
    });

    await Promise.all(promisedResults).then(r => {
      setResults(r);

      if (r.every(d => d.ok)) {
        pause();
      }
    });
  };

  const panes = TabPanes(data, clickRun, results, hours, minutes, seconds);

  // gradually show lines from the solution
  React.useEffect(() => {
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
  }, []);

  return (
    <div style={{ padding: '1vh 1vw' }}>
      <div style={{ height: '36vh', padding: '1vh 1vw' }}>
        <Tab menu={{ fluid: true, vertical: true }} panes={panes} />
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

export default App;
