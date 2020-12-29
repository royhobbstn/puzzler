import * as React from 'react';
import { Button, Card } from 'semantic-ui-react';
import TestCaseTable from './TestCaseTable.js';
import showdown from 'showdown';
import { hasOutstandingProblemIds } from './problemIds.js';

const converter = new showdown.Converter();

export default function TabPanes(
  propRefs,
  clickSkip,
  revealAnswer,
  clickSkipToResults,
  clickNext,
  clickNextToResults,
) {
  const data = propRefs.current.data;
  const results = propRefs.current.results;
  const isBusyTesting = propRefs.current.isBusyTesting;
  const id = propRefs.current.id;
  const revealButtonPressed = propRefs.current.revealButtonPressed;

  if (!data) {
    return [];
  }

  function createMarkup() {
    return { __html: converter.makeHtml(data.problemText) };
  }

  const hasTests = results.length;
  const passedAllTests = results.length && results.every(d => d.ok);

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
              {!revealButtonPressed && !passedAllTests ? (
                <Button
                  style={{ margin: 'auto', display: 'block', float: 'left', width: '138px' }}
                  onClick={revealAnswer}
                >
                  Reveal Answer
                </Button>
              ) : null}

              {hasNext && !passedAllTests ? (
                <Button
                  style={{ margin: 'auto', display: 'block', float: 'right', width: '138px' }}
                  onClick={clickSkip}
                >
                  Skip
                </Button>
              ) : !passedAllTests && !hasNext ? (
                <Button
                  style={{ margin: 'auto', display: 'block', float: 'right', width: '138px' }}
                  onClick={clickSkipToResults}
                >
                  Skip to Results
                </Button>
              ) : passedAllTests && hasNext ? (
                <Button
                  style={{ margin: 'auto', display: 'block', float: 'right', width: '138px' }}
                  onClick={clickNext}
                >
                  Next Problem
                </Button>
              ) : passedAllTests && !hasNext ? (
                <Button
                  style={{ margin: 'auto', display: 'block', float: 'right', width: '138px' }}
                  onClick={clickNextToResults}
                >
                  See Results
                </Button>
              ) : null}
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
            ) : !hasTests ? (
              <p>Tests have not been run yet for this problem.</p>
            ) : (
              <TestCaseTable results={results} id={id} />
            )}
          </Card.Content>
        </Card>
      ),
    },
  ];
}
