import { data } from './data.js';
import * as React from 'react';
import 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow_night_eighties';
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/webpack-resolver';
import AceEditor from 'react-ace';
import { Button, Card } from 'semantic-ui-react';
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
  const editor1 = React.useRef();
  const editor2 = React.useRef();

  const clickRun = async () => {
    // run sandbox code in a worker
    const worker = new Worker();
    const obj = Comlink.wrap(worker);
    const response = obj.evaluate(value).catch(e => {
      console.log(e);
    });
    const timeout = new Promise(resolve => {
      setTimeout(resolve, 1000, 'timeout');
    });
    Promise.race([response, timeout]).then(value => {
      console.log(value);
      obj[Comlink.releaseProxy]();
      worker.terminate();
    });
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

  return (
    <div style={{ padding: '8px' }}>
      <Card fluid color="red" raised={true}>
        <Card.Content>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </Card.Content>
      </Card>

      <div className="columns" style={{ height: '70vh' }}>
        <div className="column">
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
      <div>
        <Button onClick={clickRun}>Run</Button>
      </div>
    </div>
  );
}

export default App;
