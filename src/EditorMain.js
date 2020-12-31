import * as React from 'react';
import AceEditor from 'react-ace';
import prettier from 'prettier/esm/standalone.mjs';
import parserBabel from 'prettier/esm/parser-babel.mjs';
import { connect } from 'react-redux';

import { setValue } from './gameStore.js';
import { clickRun } from './thunks.js';

function EditorMain({ propRefs, setValue, value, clickRun }) {
  const editor1 = React.useRef();

  const onChange = val => {
    setValue(val);
    editor1.current.editor.resize();
  };

  return (
    <div
      style={{ padding: '1vh 1vw', width: '48.5vw', backgroundColor: 'ivory', borderRadius: '5px' }}
    >
      <AceEditor
        ref={editor1}
        placeholder={'Enter text here...'}
        mode="javascript"
        theme="dawn"
        name="editor1"
        onChange={onChange}
        value={value}
        width={'47vw'}
        height={'59vh'}
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
            name: 'prettier',
            bindKey: { win: 'Ctrl-S', mac: 'Cmd-S' },
            exec: editor => {
              try {
                const formatted = prettier.format(editor.session.getValue(), {
                  parser: 'babel',
                  plugins: [parserBabel],
                });
                setValue(formatted);
              } catch (err) {
                console.log('There was an error in compilation.');
              }
            },
          },
          {
            name: 'run tests',
            bindKey: { win: 'Ctrl-M', mac: 'Cmd-M' },
            exec: async () => {
              try {
                await clickRun(propRefs);
              } catch (err) {
                console.log('Encountered an error when attempting to run tests.');
              }
            },
          },
        ]}
      />
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    value: state.game.value,
    propRefs: props.game.propRefs,
  };
};

const mapDispatchToProps = {
  setValue,
  clickRun,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorMain);
