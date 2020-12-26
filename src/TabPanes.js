import * as React from 'react';
import { Button, Card } from 'semantic-ui-react';
import TestCaseTable from './TestCaseTable.js';
import showdown from 'showdown';
const converter = new showdown.Converter();

export default function TabPanes(data, clickRun, results) {
  function createMarkup() {
    return { __html: converter.makeHtml(data.problemText) };
  }

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
      menuItem: 'Run Tests',
      render: () => (
        <Card fluid color="blue" raised={true} style={{ height: '33vh', overflowY: 'scroll' }}>
          <Card.Content>
            <Button onClick={clickRun}>Run {data.testCases.length} Tests</Button>
            <span></span>
          </Card.Content>
          <Card.Content>
            <TestCaseTable results={results} />
          </Card.Content>
        </Card>
      ),
    },
  ];
}
