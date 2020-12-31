import * as React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { connect } from 'react-redux';
import 'highlight.js/styles/github.css';
import { setOpen } from './gameStore';

hljs.registerLanguage('javascript', javascript);

function TestCodeModal({ open, noteCode }) {
  return (
    <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
      <Modal.Header>Test Code</Modal.Header>
      <Modal.Content>
        <div
          style={{ whiteSpace: 'pre' }}
          dangerouslySetInnerHTML={{ __html: hljs.highlight('javascript', noteCode).value }}
        ></div>
      </Modal.Content>
      <Modal.Actions>
        <Button style={{ width: '138px' }} onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

const mapStateToProps = (state, props) => {
  return {
    open: state.game.open,
    noteCode: state.game.noteCode,
  };
};

const mapDispatchToProps = { setOpen };

export default connect(mapStateToProps, mapDispatchToProps)(TestCodeModal);
