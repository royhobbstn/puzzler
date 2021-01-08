import * as React from 'react';
import { Card, Table, Button, Icon, Divider } from 'semantic-ui-react';
import { inventory } from '../data/inventory';
import { connect } from 'react-redux';
import showdown from 'showdown';
import { useHistory, useParams } from 'react-router-dom';
import {
  setSelections,
  setActiveProblemText,
  setShowModal,
  shiftSelection,
} from '../redux/filterStore';
import { clickNext } from '../redux/gameStore';

const converter = new showdown.Converter();

function SelectionsCard({
  selections,
  setSelections,
  setActiveProblemText,
  setShowModal,
  clickNext,
  shiftSelection,
}) {
  const history = useHistory();
  const { id } = useParams();

  const clearAll = () => {
    setSelections([]);
  };

  const clickStart = () => {
    const nextId = selections[0];
    clickNext(id);
    shiftSelection();
    history.push(`/${nextId}`);
  };

  const subtractProblemId = problemID => {
    setSelections(selections.filter(d => d !== problemID));
  };

  const showModalMarkdown = problemText => {
    setActiveProblemText(problemText);
    setShowModal(true);
  };

  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <Card.Content header="Selections" />
      <Divider style={{ padding: '0', margin: '0' }} />
      <div style={{ overflowY: 'scroll' }}>
        <div style={{ padding: '1em', height: '63px' }}>
          <Button
            disabled={Boolean(!selections.length)}
            style={{ float: 'left' }}
            onClick={clearAll}
          >
            Clear All
          </Button>
          <Button
            style={{ float: 'right' }}
            onClick={clickStart}
            disabled={Boolean(!selections.length)}
            primary={true}
          >
            START
          </Button>
        </div>
        <Divider style={{ padding: '0', margin: '0' }} />
        <div style={{ padding: '1em 1em 0 1em' }}>{selections.length} Problem(s) Selected.</div>

        <div style={{ padding: '1em' }}>
          <Table celled compact="very">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Difficulty</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Effort</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Category</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {selections.length ? (
                selections.map(id => {
                  const problem = inventory[id];
                  return (
                    <Table.Row key={problem.problemID}>
                      <Table.Cell>
                        <div
                          style={{ display: 'inline' }}
                          className="hover-link"
                          onClick={() => showModalMarkdown(problem.problemText)}
                          dangerouslySetInnerHTML={{
                            __html: converter.makeHtml(
                              `**${problem.problemID}**:  ` + problem.problemName,
                            ),
                          }}
                        ></div>
                      </Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>
                        <span
                          style={{
                            backgroundColor: 'azure',
                            color: 'black',
                            display: 'inline-block',
                            border: '1px solid darkslategrey',
                            borderRadius: '50%',
                            width: '1.5em',
                            height: '1.5em',
                            lineHeight: '1.25em',
                            verticalAlign: 'center',
                            boxShadow: '1px 1px 2px lightslategrey',
                          }}
                        >
                          {problem.difficulty}
                        </span>
                      </Table.Cell>
                      <Table.Cell style={{ textAlign: 'center' }}>{problem.effort}</Table.Cell>
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
        </div>
      </div>
    </Card>
  );
}

const mapStateToProps = (state, props) => {
  return {
    selections: state.filter.selections,
  };
};

const mapDispatchToProps = {
  setSelections,
  setActiveProblemText,
  setShowModal,
  clickNext,
  shiftSelection,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionsCard);
