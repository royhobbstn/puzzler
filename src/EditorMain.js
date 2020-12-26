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
    <AceEditor
      ref={editor1}
      placeholder={'Enter text here...'}
      mode="javascript"
      theme="dawn"
      name="editor1"
      onChange={onChange}
      value={value}
      width={'48vw'}
      height={'61vh'}
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
  );
}
