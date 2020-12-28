import * as React from 'react';
import { Button, Card } from 'semantic-ui-react';
import TestCaseTable from './TestCaseTable.js';
import showdown from 'showdown';
import { hasOutstandingProblemIds } from './problemSet.js';

const converter = new showdown.Converter();

export default function TabPanes(data, results, isBusyTesting, id, clickSkip) {
  if (!data) {
    return [];
  }

  function createMarkup() {
    return { __html: converter.makeHtml(data.problemText) };
  }

  const hasNext = hasOutstandingProblemIds();

  return [
    {
      menuItem: 'Problem',
      render: () => (
        <Card fluid color="red" raised={true} style={{ height: '33vh', overflowY: 'scroll' }}>
          <Card.Content>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </Card.Content>

          <Card.Content>
            {hasNext ? (
              <Button
                visible={hasNext}
                style={{ margin: 'auto', display: 'block' }}
                onClick={() => clickSkip(false)}
              >
                Skip
              </Button>
            ) : (
              <Button
                visible={hasNext}
                style={{ margin: 'auto', display: 'block' }}
                onClick={() => clickSkip(true)}
              >
                Skip to Results
              </Button>
            )}
          </Card.Content>
        </Card>
      ),
    },
    {
      menuItem: 'Test Results',
      render: () => (
        <Card fluid color="blue" raised={true} style={{ height: '33vh', overflowY: 'scroll' }}>
          <Card.Content>
            {isBusyTesting ? (
              <p>Testing in Progress...</p>
            ) : (
              <TestCaseTable results={results} id={id} />
            )}
          </Card.Content>
        </Card>
      ),
    },
  ];
}
