import * as React from 'react';
import { Table, Modal, Button, Icon } from 'semantic-ui-react';
import prettier from 'prettier/esm/standalone.mjs';
import parserBabel from 'prettier/esm/parser-babel.mjs';

//

function TestCaseTable({ results }) {
  const [open, setOpen] = React.useState(false);
  const [noteCode, setNoteCode] = React.useState('');

  if (!results.length) {
    return null;
  }

  return (
    <div>
      <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
        <Modal.Header>Test Code</Modal.Header>
        <Modal.Content>
          <pre>{noteCode}</pre>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>

      <Table celled compact={'very'} className="run-results">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Code</Table.HeaderCell>
            <Table.HeaderCell>Expected</Table.HeaderCell>
            <Table.HeaderCell>Actual</Table.HeaderCell>
            <Table.HeaderCell>Error</Table.HeaderCell>
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
                <Table.Cell>
                  <Button
                    icon
                    compact
                    onClick={() => {
                      const formatted = prettier.format(test.code, {
                        parser: 'babel',
                        plugins: [parserBabel],
                      });
                      setNoteCode(formatted);
                      setOpen(true);
                    }}
                  >
                    <Icon name="sticky note outline" />
                  </Button>
                </Table.Cell>
                <Table.Cell>{test.expected}</Table.Cell>
                <Table.Cell>{test.actual}</Table.Cell>
                <Table.Cell>{test.error}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default TestCaseTable;
