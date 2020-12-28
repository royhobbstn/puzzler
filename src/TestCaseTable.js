import * as React from 'react';
import { Table, Modal, Button, Icon } from 'semantic-ui-react';
import { constructTest } from './util.js';
import { inventory } from './data/inventory.js';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import prettier from 'prettier/esm/standalone.mjs';
import parserBabel from 'prettier/esm/parser-babel.mjs';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('javascript', javascript);

function TestCaseTable({ results: rawResults, id }) {
  const [open, setOpen] = React.useState(false);
  const [noteCode, setNoteCode] = React.useState('');
  const [tableSort, updateTableSort] = React.useState('id'); // id | fail | success

  const results = [...rawResults].sort((a, b) => {
    if (tableSort === 'id') {
      return a.id - b.id;
    } else if (tableSort === 'fail') {
      let aValue = a.ok ? a.id + 10000 : a.id;
      let bValue = b.ok ? b.id + 10000 : b.id;
      return aValue - bValue;
    } else if (tableSort === 'success') {
      let aValue = a.ok ? a.id : a.id + 10000;
      let bValue = b.ok ? b.id : b.id + 10000;
      return aValue - bValue;
    } else {
      throw new Error(`Invalid sort choice: ${tableSort}`);
    }
  });

  const nextSort = () => {
    if (tableSort === 'id') {
      updateTableSort('fail');
    } else if (tableSort === 'fail') {
      updateTableSort('success');
    } else if (tableSort === 'success') {
      updateTableSort('id');
    } else {
      throw new Error(`Invalid sort choice: ${tableSort}`);
    }
  };

  if (!results.length) {
    return null;
  }

  const data = inventory[id];

  return (
    <div>
      <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
        <Modal.Header>Test Code</Modal.Header>
        <Modal.Content>
          <div
            style={{ whiteSpace: 'pre' }}
            dangerouslySetInnerHTML={{ __html: hljs.highlight('javascript', noteCode).value }}
          ></div>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>

      <Table celled compact={'very'} className="run-results">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell style={{ textAlign: 'center' }}>ID</Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>Code</Table.HeaderCell>
            <Table.HeaderCell>Expected</Table.HeaderCell>
            <Table.HeaderCell>Actual</Table.HeaderCell>
            <Table.HeaderCell>Error</Table.HeaderCell>
            <Table.HeaderCell onClick={nextSort} style={{ textAlign: 'center', cursor: 'pointer' }}>
              Status
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {results.map(test => {
            return (
              <Table.Row
                key={test.id}
                style={{
                  backgroundColor: test.ok ? 'rgba(0, 255, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)',
                }}
              >
                <Table.Cell style={{ textAlign: 'center' }}>{test.id}</Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>
                  <Icon
                    className="hover-note"
                    name="sticky note outline"
                    role="button"
                    onClick={() => {
                      const constructedTest = constructTest(
                        data.testCases,
                        test.inherit,
                        test.code,
                        test.evaluate,
                      );
                      const formatted = prettier.format(constructedTest, {
                        parser: 'babel',
                        plugins: [parserBabel],
                      });
                      setNoteCode(formatted);
                      setOpen(true);
                    }}
                  ></Icon>
                </Table.Cell>
                <Table.Cell>
                  {typeof test.expected !== 'string'
                    ? JSON.stringify(test.expected)
                    : test.expected}
                </Table.Cell>
                <Table.Cell>{test.actual}</Table.Cell>
                <Table.Cell>{test.error}</Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>
                  {test.ok ? (
                    <Icon color="green" name="checkmark" />
                  ) : (
                    <Icon color="red" name="checkmark" />
                  )}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default TestCaseTable;
