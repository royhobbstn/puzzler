import * as React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { hasOutstandingProblemIds } from './problemIds.js';
import { connect } from 'react-redux';

import { setMoveToNextModal } from './store';
import { clickNext, clickNextToResults } from './thunks.js';

function MoveToNextModal({
  propRefs,
  setMoveToNextModal,
  clickNext,
  clickNextToResults,
  moveToNextModal,
}) {
  const hasNext = hasOutstandingProblemIds();

  return (
    <Modal size="tiny" onClose={() => setMoveToNextModal(false)} open={moveToNextModal}>
      <Modal.Header>
        &#127881; Congratulations!{' '}
        <span style={{ marginLeft: '20px', fontWeight: 'normal' }}>All Tests Passed!</span>
      </Modal.Header>
      <Modal.Content style={{ width: '85%', margin: '0 auto 50px auto', maxWidth: '400px' }}>
        <Button
          autoFocus
          style={{ width: '115px', float: 'left' }}
          onClick={() => {
            setMoveToNextModal(false);
            hasNext ? clickNext(propRefs) : clickNextToResults(propRefs);
          }}
        >
          {hasNext ? 'Next' : 'Results'}
        </Button>
        <Button
          style={{ width: '115px', float: 'right' }}
          onClick={() => setMoveToNextModal(false)}
        >
          Wait Here
        </Button>
      </Modal.Content>
    </Modal>
  );
}

const mapStateToProps = (state, props) => {
  return {
    moveToNextModal: state.moveToNextModal,
    propRefs: props.propRefs,
  };
};

const mapDispatchToProps = {
  setMoveToNextModal,
  clickNext,
  clickNextToResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveToNextModal);
