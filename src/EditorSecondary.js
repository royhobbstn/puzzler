import * as React from 'react';
import AceEditor from 'react-ace';

export default function EditorSecondary({ value2 }) {
  const editor2 = React.useRef();

  const onChange2 = () => {
    editor2.current.editor.resize();
  };

  return (
    <AceEditor
      ref={editor2}
      placeholder="No suggestions..."
      mode="javascript"
      theme="github"
      width={'48vw'}
      height={'61vh'}
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
  );
}
