import * as React from 'react';
import { Card, Table, Button, Icon } from 'semantic-ui-react';
import { inventory } from './data/inventory';

export default function SelectionsCard({ selections, setSelections, showModalMarkdown }) {
  const clearAll = () => {
    setSelections([]);
  };

  const subtractProblemId = problemID => {
    setSelections(selections.filter(d => d !== problemID));
  };

  return (
    <Card style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <Card.Content header="Selections" />
      <Card.Content>
        <Button style={{ float: 'left' }} onClick={clearAll}>
          Clear All
        </Button>
        <Button style={{ float: 'right' }} primary={true}>
          START
        </Button>
      </Card.Content>
      <Card.Content>{selections.length} Problems Selected.</Card.Content>

      <Card.Content>
        <Table celled compact="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell style={{ textAlign: 'center' }}>Category</Table.HeaderCell>
              <Table.HeaderCell style={{ textAlign: 'center' }}>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {}
          <Table.Body>
            {selections.length ? (
              selections.map(id => {
                const problem = inventory[id];
                return (
                  <Table.Row key={problem.problemID}>
                    <Table.Cell>
                      <span style={{ fontWeight: 'bold', marginRight: '10px' }}>
                        #{problem.problemID}
                      </span>
                      <span
                        className="hover-link"
                        onClick={() => showModalMarkdown(problem.problemText)}
                      >
                        {problem.problemName}
                      </span>
                    </Table.Cell>
                    <Table.Cell style={{ textAlign: 'center' }}>{problem.category}</Table.Cell>
                    <Table.Cell style={{ textAlign: 'center' }}>
                      <Button icon onClick={() => subtractProblemId(problem.problemID)}>
                        <Icon className="hover-circle-off" name="minus" />
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
