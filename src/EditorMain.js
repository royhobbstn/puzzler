import * as React from 'react';
import AceEditor from 'react-ace';
import prettier from 'prettier/esm/standalone.mjs';
import parserBabel from 'prettier/esm/parser-babel.mjs';

export default function EditorMain({ setValue, value }) {
  const editor1 = React.useRef();

  const onChange = a => {
    setValue(a);
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
            name: 'save',
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
        ]}
      />
    </div>
  );
}
