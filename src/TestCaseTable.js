import { Table } from 'semantic-ui-react';

//

function TestCaseTable({ results }) {
  if (!results.length) {
    return null;
  }

  console.log(results);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Input</Table.HeaderCell>
          <Table.HeaderCell>Expected</Table.HeaderCell>
          <Table.HeaderCell>Actual</Table.HeaderCell>
          <Table.HeaderCell>Error</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {results.map(test => {
          return (
            <Table.Row key={test.id}>
              <Table.Cell>{test.id}</Table.Cell>
              <Table.Cell>{test.code}</Table.Cell>
              <Table.Cell>{test.expected}</Table.Cell>
              <Table.Cell>{test.actual}</Table.Cell>
              <Table.Cell>{test.error}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default TestCaseTable;
