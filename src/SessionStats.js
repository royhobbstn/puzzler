import * as React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { getPersonalBests } from './personalBests.js';
import { inventory } from './data/inventory.js';
import { useHistory } from 'react-router-dom';
import { convertToTimer } from './util.js';
import { useDispatch, useSelector } from 'react-redux';
import showdown from 'showdown';
import { setSessionHistory } from './redux/gameStore';
import { setActiveProblemText, setShowModal } from './redux/filterStore';
const converter = new showdown.Converter();

function SessionStats() {
  const dispatch = useDispatch();
  const sessionHistory = useSelector(state => state.game.sessionHistory);

  const history = useHistory();
  const personalBests = getPersonalBests();

  const showModalMarkdown = problemText => {
    dispatch(setActiveProblemText(problemText));
    dispatch(setShowModal(true));
  };

  return (
    <div style={{ paddingBottom: '30px' }}>
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
          style={{ float: 'left', width: '138px' }}
          onClick={() => {
            history.push('/');
          }}
        >
          Go Home
        </Button>
        <Button
          style={{ float: 'right', width: '138px' }}
          onClick={() => {
            dispatch(setSessionHistory([]));
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
            const measuredTime = convertToTimer(entry.seconds);
            const bestTime = convertToTimer(personalBests[entry.id]);

            return (
              <Table.Row
                key={index}
                style={{
                  backgroundColor:
                    measuredTime === bestTime ? `rgba(0,255,0,0.2)` : `rgba(255,0,0,0.2)`,
                }}
              >
                <Table.Cell>{entry.id}</Table.Cell>
                <Table.Cell>
                  <div
                    style={{ display: 'inline' }}
                    className="hover-link"
                    onClick={() => showModalMarkdown(inventory[entry.id].problemText)}
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(inventory[entry.id].problemName),
                    }}
                  ></div>
                </Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>{measuredTime}</Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>{bestTime}</Table.Cell>
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
