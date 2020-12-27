import * as React from 'react';
import { Button, Card } from 'semantic-ui-react';
import TestCaseTable from './TestCaseTable.js';
import showdown from 'showdown';
const converter = new showdown.Converter();

export default function TabPanes(data, clickRun, results, hours, minutes, seconds) {
  function createMarkup() {
    return { __html: converter.makeHtml(data.problemText) };
  }

  let passedTests = 0;
  for (let result of results) {
    if (result.ok) {
      passedTests++;
    }
  }

  const totalTests = data.testCases.length;

  const showNextButton = totalTests === passedTests;

  return [
    {
      menuItem: 'Problem',
      render: () => (
        <Card fluid color="red" raised={true} style={{ height: '33vh', overflowY: 'scroll' }}>
          <Card.Content>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </Card.Content>
        </Card>
      ),
    },
    {
      menuItem: 'Run',
      render: () => (
        <Card fluid color="blue" raised={true} style={{ height: '33vh', overflow: 'hidden' }}>
          <div className="tabrow" style={{ width: '100%', height: '100%' }}>
            <div className="tabcolumn" style={{ width: '100%', height: '100%' }}>
              <div style={{ margin: 'auto', marginTop: '10vh' }}>
                <Button onClick={clickRun} style={{ margin: 'auto', display: 'block' }}>
                  Run Tests
                </Button>
                <span
                  style={{ margin: 'auto', padding: '1vh', display: 'block', textAlign: 'center' }}
                >
                  {passedTests} of {totalTests}{' '}
                  <span style={{ color: `${showNextButton ? 'green' : 'red'}` }}>&#10003;</span>
                </span>
              </div>
            </div>
            <div className="tabcolumn" style={{ width: '100%', height: '100%' }}>
              <div style={{ margin: 'auto', marginTop: '10vh' }}>
                <Button style={{ margin: 'auto', display: 'block' }}>Skip</Button>
              </div>
            </div>
            <div className="tabcolumn">
              <div
                style={{
                  fontSize: '2em',
                  margin: 'auto',
                  marginTop: '11vh',
                  marginBottom: '0.25em',
                }}
              >
                <span>{hours}</span>:<span>{minutes < 10 ? '0' + minutes : minutes}</span>:
                <span>{seconds < 10 ? '0' + seconds : seconds}</span>
              </div>
              <div style={{ margin: 'auto', marginTop: '0.25em' }}>
                {showNextButton ? (
                  <Button style={{ margin: 'auto', display: 'block' }}>Next Problem</Button>
                ) : null}
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      menuItem: 'Test Results',
      render: () => (
        <Card fluid color="blue" raised={true} style={{ height: '33vh', overflowY: 'scroll' }}>
          <Card.Content>
            <TestCaseTable results={results} />
          </Card.Content>
        </Card>
      ),
    },
  ];
}
