import * as React from 'react';
import showdown from 'showdown';
import { Modal, Button } from 'semantic-ui-react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { setShowModal } from './redux/filterStore';
import { Footnote } from './Home/Footnote';
import { inventory } from './data/inventory';

const converter = new showdown.Converter();

function ProblemTextModal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state: RootStateOrAny) => state.filter.showModal);
  const activeProblemText = useSelector((state: RootStateOrAny) => state.filter.activeProblemText);
  const activeProblemId = useSelector((state: RootStateOrAny) => state.filter.activeProblemId);

  return (
    <Modal
      onClose={() => dispatch(setShowModal(false))}
      onOpen={() => dispatch(setShowModal(true))}
      open={showModal}
    >
      <Modal.Header>Problem Text</Modal.Header>
      <Modal.Content>
        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(activeProblemText) }}></div>
        <Footnote
          noteSource={(inventory[activeProblemId] && inventory[activeProblemId].source) || []}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button style={{ width: '138px' }} onClick={() => dispatch(setShowModal(false))}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ProblemTextModal;
