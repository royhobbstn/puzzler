import * as React from 'react';
import AceEditor from 'react-ace';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import { setValue } from '../redux/gameStore';
import { clickRun } from '../redux/thunks.js';
import { useParams } from 'react-router-dom';
import ReactAce from 'react-ace/lib/ace';

function EditorMain() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootStateOrAny) => state.game.value);

  const editor1 = React.useRef<ReactAce>(null);
  const propsRef = React.useRef<{ id: string }>({ id: '' });
  const { id } = useParams<{ id: string }>();

  propsRef.current.id = id;

  const onChange = (val: string) => {
    dispatch(setValue(val));
    if (!editor1 || !editor1.current) {
      return;
    }
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
                dispatch(setValue(formatted));
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
                // TODO after switching thunks to TS
                // dispatch(clickRun(propsRef.current.id));
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

export default EditorMain;
