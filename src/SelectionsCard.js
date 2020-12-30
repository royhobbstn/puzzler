import * as React from 'react';
import { Card, Table, Icon, Button } from 'semantic-ui-react';

export default function SelectionsCard({ selections, setSelections }) {
  const showModalMarkdown = () => {};

  const addProblemId = () => {};

  return (
    <Card style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <Card.Content header="Selections" />
      <Card.Content>
        <Button style={{ float: 'left' }}>Clear All</Button>
        <Button style={{ float: 'right' }} primary={true}>
          START
        </Button>
      </Card.Content>

      <Card.Content>
        <Table celled compact="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={{ textAlign: 'center' }}>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell style={{ textAlign: 'center' }}>Text</Table.HeaderCell>
              <Table.HeaderCell style={{ textAlign: 'center' }}>Category</Table.HeaderCell>
              <Table.HeaderCell style={{ textAlign: 'center' }}>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {}
          <Table.Body>
            {selections.length ? (
              selections.map(problem => {
                return (
                  <Table.Row key={problem}>
                    <Table.Cell style={{ textAlign: 'center' }}>{problem.problemID}</Table.Cell>
                    <Table.Cell>{problem.problemName}</Table.Cell>
                    <Table.Cell style={{ textAlign: 'center' }}>
                      <Button icon onClick={() => showModalMarkdown(problem.problemText)}>
                        <Icon className="hover-markdown" name="sticky note outline" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell style={{ textAlign: 'center' }}>{problem.category}</Table.Cell>
                    <Table.Cell style={{ textAlign: 'center' }}>
                      <Button icon onClick={() => addProblemId(problem.problemID)}>
                        <Icon className="hover-circle-on" name="add" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            ) : (
              <Table.Row key={0}>
                <Table.Cell colSpan="4">No Selections</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Card.Content>
    </Card>
  );
}
