import { data } from './data.js';
import * as React from 'react';
import 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow_night_eighties';
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/webpack-resolver';
import AceEditor from 'react-ace';
import { Button, Card, Tab } from 'semantic-ui-react';
import TestCaseTable from './TestCaseTable.js';
import prettier from 'prettier/esm/standalone.mjs';
import parserBabel from 'prettier/esm/parser-babel.mjs';
import showdown from 'showdown';
import * as Comlink from 'comlink';
/* eslint-disable import/no-webpack-loader-syntax */
import Worker from 'worker-loader!./worker';
const converter = new showdown.Converter();

function App() {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [results, setResults] = React.useState([]);
  const editor1 = React.useRef();
  const editor2 = React.useRef();

  const clickRun = async () => {
    // clear old test results
    setResults([]);

    // for each test
    for (let [index, test] of data.testCases.entries()) {
      // run sandbox code in a worker
      const worker = new Worker();
      const obj = Comlink.wrap(worker);
      let error = '';
      const response = obj.evaluate(value + test.code).catch(e => {
        console.log(e);
        error = e.message;
      });
      const timeout = new Promise(resolve => {
        setTimeout(resolve, data.maxExecutionTime * 1000, 'timeout');
      });
      const val = await Promise.race([response, timeout]);
      obj[Comlink.releaseProxy]();
      worker.terminate();

      // update test result
      // todo
      console.log(val);
      let representation = '';
      if (typeof val === 'object') {
        representation = JSON.stringify(val);
      } else {
        representation = val;
      }

      if (!index) {
        // first test case, clear previous results
        setResults([{ ...test, actual: representation, error }]);
      } else {
        setResults([...results, { ...test, actual: representation, error }]);
      }
    }
  };

  const onChange = a => {
    setValue(a);
    editor1.current.editor.resize();
  };

  const onChange2 = a => {
    editor2.current.editor.resize();
  };

  React.useEffect(() => {
    for (let [index, duration] of data.solution.stages.entries()) {
      window.setTimeout(() => {
        const transform = data.solution.solutions[0].solutionLines
          .map(line => {
            if (line.stage <= index) {
              return line.text;
            }
            return '  //';
          })
          .join('\n');

        setValue2(transform);

        if (index === 0) {
          setValue(transform);
        }
      }, duration * 1000);
    }
  }, []);

  function createMarkup() {
    return { __html: converter.makeHtml(data.problemText) };
  }

  const panes = [
    {
      menuItem: 'Problem',
      render: () => (
        <Card fluid color="red" raised={true} style={{ height: '26vh', overflowY: 'scroll' }}>
          <Card.Content>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </Card.Content>
        </Card>
      ),
    },
    {
      menuItem: 'Test Results',
      render: () => (
        <Card fluid color="blue" raised={true} style={{ height: '26vh', overflowY: 'scroll' }}>
          <Card.Content>
            <TestCaseTable results={results} />
          </Card.Content>
        </Card>
      ),
    },
    {
      menuItem: 'Run',
      render: () => (
        <Card fluid color="green" raised={true} style={{ height: '26vh', overflowY: 'scroll' }}>
          <Card.Content>
            <Button onClick={clickRun}>Run</Button>
          </Card.Content>
        </Card>
      ),
    },
  ];

  return (
    <div style={{ padding: '1vh 1vw' }}>
      <div style={{ height: '36vh', padding: '1vh 1vw' }}>
        <Tab menu={{ fluid: true, vertical: true }} panes={panes} />
      </div>
      <div className="columns-ex">
        <div className="column-ex">
          <AceEditor
            ref={editor1}
            placeholder={'Enter text here...'}
            mode="javascript"
            theme="tomorrow_night_bright"
            name="editor1"
            onChange={onChange}
            value={value}
            width={'100%'}
            height={'60vh'}
            showGutter={true}
            highlightActiveLine={true}
            wrapEnabled={true}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
            commands={[
              {
                name: 'save',
                bindKey: { win: 'Ctrl-S', mac: 'Cmd-S' },
                exec: editor => {
                  const formatted = prettier.format(editor.session.getValue(), {
                    parser: 'babel',
                    plugins: [parserBabel],
                  });
                  setValue(formatted);
                },
              },
            ]}
          />
        </div>
        <div className="column">
          <AceEditor
            ref={editor2}
            placeholder="No suggestions..."
            mode="javascript"
            theme="tomorrow_night_eighties"
            width={'100%'}
            height={'60vh'}
            name="editor2"
            readOnly={true}
            showGutter={true}
            onChange={onChange2}
            value={value2}
            highlightActiveLine={false}
            wrapEnabled={true}
            setOptions={{
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
