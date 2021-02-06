import * as React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useDispatch, useSelector } from 'react-redux';
import 'highlight.js/styles/github.css';
import { setOpen } from '../redux/gameStore';

hljs.registerLanguage('javascript', javascript);

function TestCodeModal() {
  const dispatch = useDispatch();
  const open = useSelector(state => state.game.open);
  const noteCode = useSelector(state => state.game.noteCode);

  return (
    <Modal
      onClose={() => dispatch(setOpen(false))}
      onOpen={() => dispatch(setOpen(true))}
      open={open}
    >
      <Modal.Header>Test Code</Modal.Header>
      <Modal.Content>
        <div
          style={{
            whiteSpace: 'pre',
            border: '1px dotted cornflowerblue',
            backgroundColor: 'lavender',
            borderRadius: '5px',
            padding: '1em',
            fontFamily: 'monospace',
          }}
          dangerouslySetInnerHTML={{ __html: hljs.highlight('javascript', noteCode).value }}
        ></div>
      </Modal.Content>
      <Modal.Actions>
        <Button style={{ width: '138px' }} onClick={() => dispatch(setOpen(false))}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default TestCodeModal;
