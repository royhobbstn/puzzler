import * as React from 'react';
import showdown from 'showdown';
import { Modal, Button } from 'semantic-ui-react';
const converter = new showdown.Converter();

export default function ProblemTextModal({ showModal, setShowModal, activeProblemText }) {
  return (
    <Modal onClose={() => setShowModal(false)} onOpen={() => setShowModal(true)} open={showModal}>
      <Modal.Header>Problem Text</Modal.Header>
      <Modal.Content>
        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(activeProblemText) }}></div>
      </Modal.Content>
      <Modal.Actions>
        <Button style={{ width: '138px' }} onClick={() => setShowModal(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
