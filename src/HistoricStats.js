import * as React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { getPersonalBests, clearPersonalBests } from './personalBests.js';
import { inventory } from './data/inventory.ts';
import { convertToTimer, BLANK_TIME } from './util.js';
import { useDispatch } from 'react-redux';
import showdown from 'showdown';
import { setActiveProblemId, setActiveProblemText, setShowModal } from './redux/filterStore';
const converter = new showdown.Converter();

function HistoricStats() {
  const dispatch = useDispatch();
  let [forceUpdate, setForceUpdate] = React.useState(0);
  let personalBests = getPersonalBests();

  console.log({ personalBests });

  const showModalMarkdown = (problemText, problemId) => {
    dispatch(setActiveProblemText(problemText));
    dispatch(setActiveProblemId(problemId));
    dispatch(setShowModal(true));
  };

  return (
    <div style={{ paddingBottom: '30px' }}>
      <h2 style={{ margin: '0 auto', padding: '30px 0', textAlign: 'center' }}>
        Historic Statistics
      </h2>

      <Table style={{ margin: 'auto', width: '80vw', maxWidth: '1200px', letterSpacing: '1px' }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: 'center' }}>Best</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(inventory).map((key, index) => {
            const bestTime = convertToTimer(personalBests[key]);
            if (bestTime === BLANK_TIME) {
              return null;
            }

            return (
              <Table.Row
                key={index}
                style={{
                  backgroundColor: `lavender`,
                }}
              >
                <Table.Cell>{key}</Table.Cell>
                <Table.Cell>
                  <div
                    style={{ display: 'inline' }}
                    className="hover-link"
                    onClick={() => showModalMarkdown(inventory[key].problemText, key)}
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(inventory[key].problemName),
                    }}
                  ></div>
                </Table.Cell>
                <Table.Cell style={{ textAlign: 'center' }}>{bestTime}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      {!Object.keys(personalBests).length ? (
        <p style={{ padding: '10px', margin: 'auto', width: '80vw' }}>The history is empty.</p>
      ) : (
        <div
          style={{
            width: '100%',
            padding: '40px 0',
          }}
        >
          <Button
            style={{ width: '138px', display: 'block', margin: 'auto' }}
            onClick={() => {
              clearPersonalBests();
              setForceUpdate(forceUpdate + 1);
            }}
          >
            Clear Stats
          </Button>
        </div>
      )}
    </div>
  );
}

export default HistoricStats;
