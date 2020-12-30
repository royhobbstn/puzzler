import * as React from 'react';
import { Card, Table, Icon, Button, Modal } from 'semantic-ui-react';
import showdown from 'showdown';
const converter = new showdown.Converter();

export default function ResultsCard({ results, selections, setSelections }) {
  const [showModal, setShowModal] = React.useState(false);
  const [activeProblemText, setActiveProblemText] = React.useState(0);

  const showModalMarkdown = problemText => {
    setActiveProblemText(problemText);
    setShowModal(true);
  };

  const addProblemId = problemID => {
    setSelections([...selections, problemID]);
  };

  const subtractProblemId = problemID => {
    setSelections(selections.filter(d => d !== problemID));
  };

  return (
    <React.Fragment>
      <Modal onClose={() => setShowModal(false)} onOpen={() => setShowModal(true)} open={showModal}>
        <Modal.Header>Problem Text</Modal.Header>
        <Modal.Content>
          <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(activeProblemText) }}></div>
        </Modal.Content>
        <Modal.Actions>
          <Button style={{ width: '138px' }} onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>

      <Card style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
        <Card.Content header="Filter Results" />
        <Card.Content>
          <Button icon labelPosition="right">
            Add 5 Random
            <Icon name="right arrow" />
          </Button>
        </Card.Content>
        <Card.Content>
          <Table celled compact="very">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell style={{ textAlign: 'center' }}>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Text</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Difficulty</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Time (m)</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Category</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            {}
            <Table.Body>
              {results.length ? (
                results.map(problem => {
                  const inProblemSet = selections.includes(problem.problemID);
                  return (
                    <Table.Row
                      key={problem.problemID}
                      className={inProblemSet ? 'existing-selection' : ''}
                    >
                      <Table.Cell style={{ textAlign: 'center' }}>{problem.problemID}</Table.Cell>
                      <Table.Cell>{problem.problemName}</Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>
                        <Button icon onClick={() => showModalMarkdown(problem.problemText)}>
                          <Icon className="hover-markdown" name="sticky note outline" />
                        </Button>
                      </Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>{problem.difficulty}</Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>
                        {problem.estimatedTime}
                      </Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>{problem.category}</Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>
                        {inProblemSet ? (
                          <Button icon onClick={() => subtractProblemId(problem.problemID)}>
                            <Icon className="hover-circle-off" name="minus" />
                          </Button>
                        ) : (
                          <Button icon onClick={() => addProblemId(problem.problemID)}>
                            <Icon className="hover-circle-on" name="add" />
                          </Button>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              ) : (
                <Table.Row key={0}>
                  <Table.Cell colSpan="4">No Results</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
}
