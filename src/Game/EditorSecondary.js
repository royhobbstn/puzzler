import * as React from 'react';
import AceEditor from 'react-ace';
import { useSelector } from 'react-redux';

function EditorSecondary() {
  const value2 = useSelector(state => state.game.value2);
  const editor2 = React.useRef();

  const onChange2 = () => {
    editor2.current.editor.resize();
  };

  return (
    <div
      style={{ padding: '1vh 1vw', width: '48.5vw', backgroundColor: 'ivory', borderRadius: '5px' }}
    >
      <AceEditor
        ref={editor2}
        placeholder="No suggestions..."
        mode="javascript"
        theme="github"
        width={'47vw'}
        height={'59vh'}
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
  );
}

export default EditorSecondary;
