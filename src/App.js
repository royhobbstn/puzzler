// import { data } from './data.js';
import * as React from 'react';
import 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/webpack-resolver';
import AceEditor from 'react-ace';
import { Button } from 'semantic-ui-react';

function App() {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');

  const onChange = a => {
    setValue(a);
  };

  return (
    <div style={{ padding: '8px' }}>
      <div className="columns" style={{ height: '60vh' }}>
        <div className="column">
          <h2>Editor</h2>
          <AceEditor
            placeholder={'Enter text here...'}
            mode="javascript"
            theme="github"
            name="editor1"
            onChange={onChange}
            value={value}
            height={'50vh'}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              useWorker: false,
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>
        <div className="column">
          <h2>Code</h2>
          <AceEditor
            placeholder="editor2"
            mode="javascript"
            theme="github"
            height={'50vh'}
            name="editor2"
            readOnly={true}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={value2}
            setOptions={{
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>
      </div>
      <div>
        <Button>Run</Button>
      </div>
    </div>
  );
}

export default App;
