import * as React from 'react';
import { Button, Card } from 'semantic-ui-react';
import TestCaseTable from './TestCaseTable.js';
import { useHistory } from 'react-router-dom';
import showdown from 'showdown';
import { hasOutstandingProblemIds, grabNextProblemId } from './problemSet.js';

const converter = new showdown.Converter();

export default function TabPanes(data, results, start, reset, setActiveIndex, isBusyTesting, id) {
  let history = useHistory();

  if (!data) {
    return [];
  }

  function createMarkup() {
    return { __html: converter.makeHtml(data.problemText) };
  }

  const hasNext = hasOutstandingProblemIds();

  function clickSkip() {
    reset();
    start();
    history.push(`/${grabNextProblemId()}`);
    setActiveIndex(0);
  }

  return [
    {
      menuItem: 'Problem',
      render: () => (
        <Card fluid color="red" raised={true} style={{ height: '33vh', overflowY: 'scroll' }}>
          <Card.Content>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </Card.Content>

          {hasNext ? (
            <Card.Content>
              <Button
                visible={hasNext}
                style={{ margin: 'auto', display: 'block' }}
                onClick={() => clickSkip()}
              >
                Skip
              </Button>
            </Card.Content>
          ) : null}
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
