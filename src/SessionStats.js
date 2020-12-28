import * as React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { getSessionHistory, clearSessionHistory } from './sessionHistory.js';
import { getPersonalBests } from './personalBests.js';
import { inventory } from './data/inventory.js';
import { useHistory } from 'react-router-dom';
import { convertToTimer } from './util.js';

function SessionStats() {
  const [update, setUpdate] = React.useState(1); // for forcing re-render
  const history = useHistory();

  const sessionHistory = getSessionHistory();
  const personalBests = getPersonalBests();

  return (
    <div>
      <h2 style={{ margin: '0 auto', padding: '30px 0', textAlign: 'center' }}>
        Session Statistics
      </h2>

      <div
        style={{
          margin: 'auto',
          height: '90px',
          width: '60vw',
          maxWidth: '500px',
          padding: '20px 0',
        }}
      >
        <Button
          style={{ float: 'left' }}
          onClick={() => {
            history.push('/');
          }}
        >
          Go Home
        </Button>
        <Button
          style={{ float: 'right' }}
          onClick={() => {
            clearSessionHistory();
            setUpdate(update + 1);
          }}
        >
          Clear Stats
        </Button>
      </div>

      <Table style={{ margin: 'auto', width: '80vw', maxWidth: '1200px', letterSpacing: '1px' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>Result</Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>Best</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sessionHistory.map((entry, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{entry.id}</Table.Cell>
                <Table.Cell>{inventory[entry.id].problemName}</Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>
                  {convertToTimer(entry.seconds)}
                </Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>
                  {convertToTimer(personalBests[entry.id])}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      {!sessionHistory.length ? (
        <p style={{ padding: '10px', margin: 'auto', width: '80vw' }}>
          The session history is empty.
        </p>
      ) : null}
    </div>
  );
}

export default SessionStats;
