import * as React from 'react';
import { Card } from 'semantic-ui-react';
import TestCaseTable from './TestCaseTable';
import { connect } from 'react-redux';
import showdown from 'showdown';
import { setActiveIndex } from './gameStore.js';

const converter = new showdown.Converter();

function TabCards({ data, isBusyTesting, results, id, activeIndex, setActiveIndex }) {
  if (!data) {
    return [];
  }

  const hasTests = results.length;

  function createMarkup() {
    return { __html: converter.makeHtml(data.problemText) };
  }

  return (
    <Card fluid color="red" raised={true} style={{ height: 'calc(32vh - 40px)' }}>
      <p style={{ padding: '10px 0 0 10px' }}>
        <span
          className={activeIndex === 0 ? 'pane-base chosen-pane' : 'pane-base'}
          onClick={() => setActiveIndex(0)}
        >
          Problem
        </span>{' '}
        |{' '}
        <span
          className={activeIndex === 1 ? 'pane-base chosen-pane' : 'pane-base'}
          onClick={() => setActiveIndex(1)}
        >
          Test Results
        </span>
      </p>

      <Card.Content style={{ height: 'calc(32vh - 70px)', overflowY: 'scroll' }}>
        {activeIndex === 0 ? <div dangerouslySetInnerHTML={createMarkup()} /> : null}

        {activeIndex === 1 ? (
          isBusyTesting ? (
            <p>Testing in Progress...</p>
          ) : !hasTests ? (
            <p>Tests have not been run yet for this problem.</p>
          ) : (
            <TestCaseTable results={results} id={id} />
          )
        ) : null}
      </Card.Content>
    </Card>
  );
}

const mapStateToProps = (state, props) => {
  return {
    isBusyTesting: state.game.isBusyTesting,
    results: state.game.results,
    activeIndex: state.game.activeIndex,
    id: props.id,
    data: props.data,
  };
};

const mapDispatchToProps = { setActiveIndex };

export default connect(mapStateToProps, mapDispatchToProps)(TabCards);
