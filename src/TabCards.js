import * as React from 'react';
import { Card } from 'semantic-ui-react';
import TestCaseTable from './TestCaseTable';
import showdown from 'showdown';
const converter = new showdown.Converter();

function TabCards({ data, isBusyTesting, results, id }) {
  if (!data) {
    return [];
  }

  const hasTests = results.length;

  function createMarkup() {
    return { __html: converter.makeHtml(data.problemText) };
  }

  return (
    <Card fluid color="red" raised={true} style={{ height: 'calc(32vh - 40px)' }}>
      <Card.Content>
        <div dangerouslySetInnerHTML={createMarkup()} />

        {isBusyTesting ? (
          <p>Testing in Progress...</p>
        ) : !hasTests ? (
          <p>Tests have not been run yet for this problem.</p>
        ) : (
          <TestCaseTable results={results} id={id} />
        )}
      </Card.Content>
    </Card>
  );
}

export default TabCards;
