import * as React from 'react';
import { Button, Card } from 'semantic-ui-react';
import TestCaseTable from './TestCaseTable.js';
import showdown from 'showdown';
import { hasOutstandingProblemIds } from './problemIds.js';

const converter = new showdown.Converter();

export default function TabPanes(
  data,
  results,
  isBusyTesting,
  id,
  clickSkip,
  revealAnswer,
  revealButtonPressed,
) {
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
            <div style={{ margin: 'auto', width: '60vw', maxWidth: '500px' }}>
              {!revealButtonPressed ? (
                <Button
                  visible={hasNext}
                  style={{ margin: 'auto', display: 'block', float: 'left', width: '138px' }}
                  onClick={() => revealAnswer()}
                >
                  Reveal Answer
                </Button>
              ) : null}

              {hasNext ? (
                <Button
                  visible={hasNext}
                  style={{ margin: 'auto', display: 'block', float: 'right', width: '138px' }}
                  onClick={() => clickSkip(false)}
                >
                  Skip
                </Button>
              ) : (
                <Button
                  visible={hasNext}
                  style={{ margin: 'auto', display: 'block', float: 'right', width: '138px' }}
                  onClick={() => clickSkip(true)}
                >
                  Skip to Results
                </Button>
              )}
            </div>
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
